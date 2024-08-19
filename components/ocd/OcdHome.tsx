import { Button, Text } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  onStart: () => void;
};

export function OCDHomeScreen(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../../assets/images/trophy.png")}
          style={{
            width: 200,
            height: 200,
            marginHorizontal: "auto",
          }}
        />
        <Text
          category="h5"
          style={{
            textAlign: "center",
          }}
        >
          Buktikan Bahwa Kamu Bebas OCD
        </Text>
        <Text
          category="h6"
          style={{
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          Ikuti tes sederhana ini untuk mengetahui apakah kamu memiliki gejala
          OCD
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          onPress={props.onStart}
          style={{
            width: "100%",
          }}
        >
          Mulai Sekarang
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    width: "100%",
  },
});
