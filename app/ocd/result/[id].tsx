import { SafeAreaView } from "@/components/SafeAreaView";
import { ConsultationPhone } from "@/constants/Consultation";
import { AnswerCollection, UserAnswerResult } from "@/core/entity/answers";
import { precision } from "@/utils/number";
import { diffTime } from "@/utils/time";
import firestore from "@react-native-firebase/firestore";
import { Button, Card, Text } from "@ui-kitten/components";
import { toast } from "burnt";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Linking, StyleSheet, View } from "react-native";

export default function ResultScreen() {
  const local = useLocalSearchParams();
  const { id } = local;

  const [result, setResult] = useState<UserAnswerResult>();

  const handleConsultation = () => {
    Linking.openURL(`whatsapp://send?phone=${ConsultationPhone}`)
      .then(() => {
        console.log("WhatsApp opened");
      })
      .catch((error) => {
        console.error("Failed to open WhatsApp: ", error);
        toast({
          title: "Gagal membuka WhatsApp",
          preset: "error",
        });
      });
  };

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
        created_at: data.created_at?.toDate(),
        finished_at: data.finished_at?.toDate(),
        predicate: data.predicate,
        score: data.score,
        user_id: data.user_id,
      });
    } catch (error) {
      console.error("Failed to fetch result: ", error);
      router.replace("/(tabs)/");
    }
  };

  const scorePrecision = precision(result?.score || 0);

  // Effects
  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!result) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

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
                style={{
                  textAlign: "center",
                }}
              >
                Kamu mendapatkan diagnosa sebagai berikut:
              </Text>
            </View>
            <View
              style={{
                gap: 16,
                flexDirection: "row", // Arrange items in a row (3x1 grid)
                justifyContent: "space-between", // Distribute space between cards
                marginHorizontal: 16,
              }}
            >
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 4,
                  flex: 1, // Distribute space equally
                }}
                header={() => <Text>Skor</Text>}
              >
                <Text category="s1" style={{ fontWeight: "bold" }}>
                  {isNaN(scorePrecision) ? 0 : scorePrecision}%
                </Text>
              </Card>
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 4,
                  flex: 1.2, // Distribute space equally
                }}
                header={() => <Text>Category</Text>}
              >
                {result.predicate !== null &&
                  result.predicate.split(",").map((predicate) => (
                    <Text
                      key={predicate}
                      category="s1"
                      style={{ fontWeight: "bold" }}
                    >
                      {predicate}
                    </Text>
                  ))}
                {result.predicate === null && (
                  <Text category="s1" style={{ fontWeight: "bold" }}>
                    Normal
                  </Text>
                )}
              </Card>
              <Card
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 4,
                  flex: 1, // Distribute space equally
                }}
                header={() => <Text>Durasi</Text>}
              >
                <Text category="s1" style={{ fontWeight: "bold" }}>
                  {diffTime(result.created_at, result.finished_at)}
                </Text>
              </Card>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            onPress={() => router.replace("/(tabs)/")}
            style={{
              width: "100%",
              borderRadius: 8,
            }}
          >
            Selesai
          </Button>
          {result.predicate !== null && (
            <Button
              onPress={handleConsultation}
              appearance="ghost"
              style={{ borderRadius: 8 }}
            >
              Konsultasi dengan Psikolog
            </Button>
          )}
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
