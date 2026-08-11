import { createContext, useContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const useTheme = (): ThemeContextProps => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("theme provider should be presented");
  }

  return themeContext;
};
