import { EmailRegex } from "@/constants/Email";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { Button, Input, Text } from "@ui-kitten/components";
import * as Burnt from "burnt";
import { Link, router } from "expo-router";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const authResponse = await auth().signInWithEmailAndPassword(
        data.email,
        data.password
      );

      const user = authResponse.user;
      console.log("User signed in: ", user);
      // TODO: store user data

      router.push("/(tabs)home");
    } catch (error: any) {
      const firebaseError = error as ReactNativeFirebase.NativeFirebaseError;

      const errorMap = new Map<string, string>([
        ["auth/invalid-credential", "Email or password is incorrect."],
        ["auth/user-disabled", "User account is disabled."],
        ["auth/invalid-email", "Invalid email address."],
        ["auth/user-not-found", "User not found."],
        ["auth/wrong-password", "Invalid password."],
        ["auth/too-many-requests", "Too many requests. Try again later."],
      ]);

      Burnt.toast({
        title: errorMap.get(firebaseError.code) ?? firebaseError.message,
        duration: 3000,
        from: "bottom",
        preset: "error",
        shouldDismissByDrag: true,
        layout: {
          iconSize: {
            height: 24,
            width: 24,
          },
        },
      });
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text category="h5" style={styles.title}>
          Welcome back.
        </Text>
        <View style={{ gap: 16 }}>
          <View style={{ gap: 8 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Fragment>
                  <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    size="large"
                  />
                  {errors.email && (
                    <Text style={styles.input_error}>
                      {errors.email?.message}
                    </Text>
                  )}
                </Fragment>
              )}
              rules={{
                required: "Email is required",
                pattern: {
                  value: EmailRegex,
                  message: "Invalid email address",
                },
              }}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Fragment>
                  <Input
                    placeholder="Password"
                    secureTextEntry
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    size="large"
                  />
                  {errors.password && (
                    <Text style={styles.input_error}>
                      {errors.password?.message}
                    </Text>
                  )}
                </Fragment>
              )}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
            />
          </View>
          <Button onPress={handleSubmit(onSubmit)}>Login</Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Text>Don't have an account?</Text>
          <Link href="/auth/register" asChild>
            <Text style={{ color: "blue" }}>Register</Text>
          </Link>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    gap: 8,
    padding: 16,
  },
  title: {
    textAlign: "center",
  },
  input_error: {
    color: "red",
    fontSize: 12,
  },
});
