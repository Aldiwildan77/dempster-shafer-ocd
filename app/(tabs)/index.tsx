import { OcdHome } from "@/components/ocd/OcdHome";
import { SafeAreaView } from "@/components/SafeAreaView";
import { router } from "expo-router";

export default function IndexTabScreen() {
  return (
    <SafeAreaView>
      <OcdHome
        onStart={() => {
          router.push("/ocd/test");
        }}
      />
    </SafeAreaView>
  );
}
