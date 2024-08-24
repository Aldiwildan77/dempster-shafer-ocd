import { HomeCard } from "@/components/home/HomeCard";
import { SafeAreaView } from "@/components/SafeAreaView";
import { ConsultationPhone } from "@/constants/Consultation";
import { useUserStore } from "@/hooks/useUser";
import { Text } from "@ui-kitten/components";
import { toast } from "burnt";
import { router } from "expo-router";
import { Linking, StyleSheet, View } from "react-native";

export default function IndexTabScreen() {
  const user = useUserStore((state) => state.user);

  const handleConsultation = () => {
    Linking.openURL(`whatsapp://send?phone=${ConsultationPhone}`)
      .then(() => {
        console.log("WhatsApp opened");
      })
      .catch((error) => {
        toast({
          title: "Gagal membuka WhatsApp",
          preset: "error",
        });
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text category="h4" numberOfLines={1}>
            Halo, {user?.displayName!}
          </Text>
          <HomeCard
            title="Diagnosa"
            description="Ikuti tes sederhana ini untuk mengetahui apakah kamu memiliki gejala OCD"
            image={require("@/assets/images/diagnose.png")}
            onPress={() => router.replace("/ocd")}
            color="#2bd9c2"
          />
          <HomeCard
            title="Konsultasi"
            description="Konsultasikan masalah OCD kamu dengan ahli psikologi"
            image={require("@/assets/images/consulting.png")}
            onPress={() => handleConsultation()}
            color="#f2c10c"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  body: {
    flex: 1,
    gap: 16,
  },
  footer: {
    width: "100%",
  },
});
