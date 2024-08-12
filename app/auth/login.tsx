import auth from "@react-native-firebase/auth";
import { Button, Input, Text } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text category="h5" style={styles.title}>
          Welcome back.
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          rules={{ required: "Email is required" }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Password"
              secureTextEntry
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          rules={{ required: "Password is required", maxLength: 20 }}
        />
        <Button onPress={handleSubmit(onSubmit)}>Login</Button>
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
});
