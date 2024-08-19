import { ConsultationPhone } from "@/constants/Consultation";
import { Button, Text } from "@ui-kitten/components";
import { toast } from "burnt";
import { router } from "expo-router";
import React, { useCallback } from "react";
import { Image, Linking, StyleSheet, View } from "react-native";

export default function ResultScreen() {
  const handleConsultation = useCallback(async () => {
    const uri = `https://wa.me/${ConsultationPhone}`;
    const supported = await Linking.canOpenURL(uri);
    if (!supported) {
      toast({
        title: "Gagal membuka WhatsApp",
        preset: "error",
      });
      return;
    }

    await Linking.openURL(`https://wa.me/${ConsultationPhone}`);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{ gap: 16 }}>
          <Image
            source={require("../../assets/images/result.png")}
            style={{
              width: 400,
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
            Hasil Tes Kamu!
          </Text>
          <View style={{ gap: 4 }}>
            <Text
              category="h6"
              style={{
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Kamu berhasil mendapatkan score: hasil
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Evaluasi lebih lanjut mungkin diperlukan
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Lihat detailnya di bawah
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          onPress={() => {
            router.replace("/(tabs)/");
          }}
          style={{
            width: "100%",
          }}
        >
          Selesai
        </Button>
        {/* TODO: optional if indicate only then shown */}
        <Button onPress={handleConsultation} appearance="ghost">
          Konsultasi dengan Psikolog
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
    padding: 16,
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
