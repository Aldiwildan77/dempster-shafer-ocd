import { SafeAreaView } from "@/components/SafeAreaView";
import { ConsultationPhone } from "@/constants/Consultation";
import { Answer, AnswerCollection } from "@/core/entity/answers";
import firestore from "@react-native-firebase/firestore";
import { Button, Text } from "@ui-kitten/components";
import { toast } from "burnt";
import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Linking, StyleSheet, View } from "react-native";

export default function ResultScreen() {
  const local = useLocalSearchParams();
  const { id } = local;

  const [result, setResult] = useState<Answer>();

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

  const fetchResult = async () => {
    try {
      const response = await firestore()
        .collection(AnswerCollection)
        .doc(String(id))
        .get();
      if (!response.exists) {
        throw new Error("Result not found");
      }

      const data = response.data();
      if (!data) {
        throw new Error("Result data is empty");
      }

      console.log("Result data: ", data);
      setResult({
        created_at: data.created_at.toDate(),
        finished_at: data.finished_at.toDate(),
        predicate: data.predicate,
        score: data.score,
        user_id: data.user_id,
      });
    } catch (error) {
      console.error("Failed to fetch result: ", error);
      router.replace("/(tabs)/");
    }
  };

  // Effects
  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={{ gap: 16 }}>
            <Image
              source={require("../../../assets/images/result.png")}
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
                Kamu berhasil mendapatkan score: {result?.score!}
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
              if (router.canGoBack()) {
                router.back();
                return;
              }

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
    </SafeAreaView>
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
