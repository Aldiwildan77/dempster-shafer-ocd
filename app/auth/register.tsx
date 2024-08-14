import { EmailRegex } from "@/constants/Email";
import { useUserStore } from "@/hooks/useUser";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { Button, Input, Spinner, Text } from "@ui-kitten/components";
import { toast } from "burnt";
import { Link, router } from "expo-router";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    try {
      const authResponse = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      const user = authResponse.user;
      user.displayName = data.name;

      console.log("User created: ", user);

      await user.updateProfile({ ...user });

      setUser(user);

      router.push("/(tabs)/");
    } catch (error: any) {
      const firebaseError = error as ReactNativeFirebase.NativeFirebaseError;

      const errorMap = new Map<string, string>([
        ["auth/email-already-in-use", "Email is already in use"],
        ["auth/invalid-email", "Invalid email address"],
        ["auth/operation-not-allowed", "Operation not allowed"],
        ["auth/weak-password", "Password is too weak"],
      ]);

      toast({
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text category="h5" style={styles.title}>
          Register
        </Text>
        <View style={{ padding: 8, gap: 8 }}>
          <View style={{ gap: 16 }}>
            <View style={{ gap: 8 }}>
              <Controller
                control={control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState,
                }) => (
                  <Fragment>
                    <Input
                      placeholder="Name"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      size="large"
                      status={fieldState.invalid ? "danger" : "basic"}
                    />
                    {errors.name && (
                      <Text style={styles.input_error}>
                        {errors.name?.message}
                      </Text>
                    )}
                  </Fragment>
                )}
              />
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: EmailRegex,
                    message: "Invalid email address",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState,
                }) => (
                  <Fragment>
                    <Input
                      placeholder="Email"
                      keyboardType="email-address"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      size="large"
                      status={fieldState.invalid ? "danger" : "basic"}
                    />
                    {errors.email && (
                      <Text style={styles.input_error}>
                        {errors.email?.message}
                      </Text>
                    )}
                  </Fragment>
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState,
                }) => (
                  <Fragment>
                    <Input
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      size="large"
                      status={fieldState.invalid ? "danger" : "basic"}
                    />
                    {errors.password && (
                      <Text style={styles.input_error}>
                        {errors.password?.message}
                      </Text>
                    )}
                  </Fragment>
                )}
              />
              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters",
                  },
                  onChange: (value) => value,
                  validate: (value) =>
                    value === getValues("password") ||
                    "Passwords did not match",
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState,
                }) => (
                  <Fragment>
                    <Input
                      placeholder="Confirm Password"
                      secureTextEntry
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      size="large"
                      status={fieldState.invalid ? "danger" : "basic"}
                    />
                    {errors.confirmPassword && (
                      <Text style={styles.input_error}>
                        {errors.confirmPassword?.message}
                      </Text>
                    )}
                  </Fragment>
                )}
              />
            </View>
            <Button onPress={handleSubmit(onSubmit)} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Register"}
            </Button>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Text>Already have an account?</Text>
          <Link href="/auth/login" asChild>
            <Text style={{ color: "blue" }}>Log in</Text>
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
