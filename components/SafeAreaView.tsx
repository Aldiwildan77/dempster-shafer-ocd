import { useDarkMode } from "@/context/DarkModeContext";
import { useTheme } from "@ui-kitten/components";
import { ReactNode } from "react";
import { SafeAreaView as SafeAreaViewBase } from "react-native";

type Props = {
  children: ReactNode;
};

export function SafeAreaView({ children }: Props) {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();

  return (
    <SafeAreaViewBase
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? theme["background-basic-color-1"]
          : "#fff",
        paddingTop: 24,
        padding: 12,
        justifyContent: "center",
      }}
    >
      {children}
    </SafeAreaViewBase>
  );
}
