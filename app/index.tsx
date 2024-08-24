import { useUserStore } from "@/hooks/useUser";
import Entypo from "@expo/vector-icons/Entypo";
import auth from "@react-native-firebase/auth";
import * as Font from "expo-font";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { Image, View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  function onAuthStateChanged(user: any) {
    setUser(user);
  }

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);

        // const uiManager: any = (global as any)?.nativeFabricUIManager
        //   ? "Fabric"
        //   : "Paper";
        // console.log(`Using ${uiManager}`);

        await new Promise((resolve) => setTimeout(resolve, 4 * 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();

    return auth().onAuthStateChanged(onAuthStateChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();

      if (!user) {
        router.replace("/auth/login");
      } else {
        router.replace("/(tabs)/");
      }
    }
  }, [appIsReady, user]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onLayout={onLayoutRootView}
    >
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 128, height: 128 }}
      />
    </View>
  );
}
