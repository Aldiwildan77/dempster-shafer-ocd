import { OCDHomeScreen } from "@/components/ocd/OcdHome";
import { SafeAreaView } from "@/components/SafeAreaView";
import { router } from "expo-router";

export default function IndexTabScreen() {
  return (
    <SafeAreaView>
      <OCDHomeScreen
        onStart={() => {
          router.push("/ocd/test");
        }}
      />
    </SafeAreaView>
  );
}
