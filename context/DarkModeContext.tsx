import { createContext, useContext } from "react";

type ThemeContextType = {
  isDarkMode?: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
