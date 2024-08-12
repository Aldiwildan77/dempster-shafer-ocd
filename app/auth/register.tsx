import { Button, Input, Text } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Fragment } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function RegisterScreen() {
  // TODO: add logic to handle signup
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text category="h5" style={styles.title}>
          Register
        </Text>
        <Input placeholder="Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />
        <Button>Register</Button>
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
});
