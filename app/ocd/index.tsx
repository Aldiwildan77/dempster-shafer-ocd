import { SafeAreaView } from "@/components/SafeAreaView";
import { useDebounce } from "@/hooks/useDebounce";
import { Button, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function IndexTestScreen() {
  const { debounce } = useDebounce();
  return (
    <SafeAreaView>
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
          <View style={{ gap: 8 }}>
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
              Ikuti tes sederhana ini untuk mengetahui apakah kamu memiliki
              gejala OCD
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            onPress={() => debounce(() => router.push("/ocd/test"))}
            style={{
              width: "100%",
              borderRadius: 8,
            }}
          >
            Mulai Sekarang
          </Button>
          <Button
            onPress={() => debounce(() => router.replace("/(tabs)/"))}
            appearance="ghost"
            style={{
              width: "100%",
              borderRadius: 8,
            }}
          >
            Kembali
          </Button>
        </View>
      </View>
    </SafeAreaView>
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
    gap: 8,
  },
});
