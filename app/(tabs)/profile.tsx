import { useUserStore } from "@/hooks/useUser";
import auth from "@react-native-firebase/auth";
import {
  Icon,
  IconElement,
  IconProps,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { router } from "expo-router";
import React, { Fragment } from "react";
import { Text, View } from "react-native";

const MenuIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="more-vertical" />
);

const InfoIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="info" />
);

const LogoutIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="log-out" />
);

export default function ProfileTabScreen() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const resetUser = useUserStore((state) => state.reset);

  // handlers
  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

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

  // renders
  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = (): React.ReactElement => (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem
          accessoryLeft={LogoutIcon}
          title="Logout"
          onPress={handleLogout}
        />
      </OverflowMenu>
    </>
  );

  return (
    <Fragment>
      <TopNavigation
        alignment="center"
        title="Profile"
        accessoryRight={renderRightActions}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile page</Text>
      </View>
    </Fragment>
  );
}
