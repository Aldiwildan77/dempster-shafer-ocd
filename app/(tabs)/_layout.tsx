import {
  NavigationContainer,
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";

import {
  BottomTabNavigationEventMap,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
  IconProps,
} from "@ui-kitten/components";
import React from "react";
import IndexTabScreen from ".";
import HistoryTabScreen from "./history";
import ProfileTabScreen from "./profile";

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="person-outline" />
);

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
);

const HistoryIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="clock-outline" />
);

export default function Layout() {
  const TabNavigator = () => (
    <Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="index" component={IndexTabScreen} />
      <Screen name="history" component={HistoryTabScreen} />
      <Screen name="profile" component={ProfileTabScreen} />
    </Navigator>
  );

  const BottomTabBar = ({
    navigation,
    state,
  }: {
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    state: TabNavigationState<ParamListBase>;
  }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="home" icon={HomeIcon} />
      <BottomNavigationTab title="history" icon={HistoryIcon} />
      <BottomNavigationTab title="profile" icon={PersonIcon} />
    </BottomNavigation>
  );

  return (
    <NavigationContainer independent>
      <TabNavigator />
    </NavigationContainer>
  );
}
