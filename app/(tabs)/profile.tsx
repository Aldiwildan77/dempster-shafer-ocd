import { SafeAreaView } from "@/components/SafeAreaView";
import { useDarkMode } from "@/context/DarkModeContext";
import { useUserStore } from "@/hooks/useUser";
import auth from "@react-native-firebase/auth";
import {
  Avatar,
  Icon,
  TopNavigation,
  Text,
  ListItem,
  Toggle,
  useTheme,
} from "@ui-kitten/components";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function ProfileTabScreen() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = useTheme();
  const resetUser = useUserStore((state) => state.reset);
  const user = useUserStore((state) => state.user);

  const handleLogout = async (): Promise<void> => {
    try {
      await auth().signOut();
    } catch (error: any) {
      console.error("Failed to sign out: ", error);
    } finally {
      resetUser();
      router.replace("/auth");
    }
  };

  return (
    <SafeAreaView>
      <TopNavigation title="Profile" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Avatar
          size="giant"
          source={require("../../assets/images/user-profile.png")}
        />
        {user?.displayName && <Text category="h6">{user?.displayName}</Text>}
        <Text category="s1">{user?.email || ""}</Text>
        <ListItem
          style={{ marginTop: 32 }}
          title={() => <Text category="s1">Dark Mode</Text>}
          accessoryLeft={() => (
            <Icon
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
                backgroundColor: "#",
              }}
              fill="#8F9BB3"
              name="moon"
            />
          )}
          accessoryRight={() => (
            <Toggle checked={isDarkMode} onChange={toggleDarkMode} />
          )}
        />
        <ListItem
          onPress={handleLogout}
          title={() => (
            <Text category="s1" style={{ color: theme["text-warning-color"] }}>
              Logout
            </Text>
          )}
          accessoryLeft={() => (
            <Icon
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
                backgroundColor: "#",
              }}
              fill="#8F9BB3"
              name="log-out"
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
