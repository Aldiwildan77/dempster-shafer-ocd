import { Button, Text } from "@ui-kitten/components";
import { Image, View } from "react-native";

type Props = {
  onStart: () => void;
};

export function OcdHome(props: Props) {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          gap: 8,
        }}
      >
        <Image
          source={require("../../assets/images/trophy.png")}
          style={{
            width: 200,
            height: 200,
            marginHorizontal: "auto",
          }}
        />
        <Text
          category="h4"
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
      <Button
        onPress={props.onStart}
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        Mulai Sekarang
      </Button>
    </View>
  );
}
