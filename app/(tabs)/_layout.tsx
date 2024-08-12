// create tabs _layout

import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Take Test" }} />
      <Tabs.Screen name="history" options={{ title: "Histories" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
