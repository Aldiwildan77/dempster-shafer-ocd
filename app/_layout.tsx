import { DarkModeContext } from "@/context/DarkModeContext";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Stack } from "expo-router";
import React, { Fragment, useState } from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ApplicationProvider>
      </DarkModeContext.Provider>
    </Fragment>
  );
}
