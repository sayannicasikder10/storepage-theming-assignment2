import React, { useEffect } from "react";
import { useThemeStore } from "./themeStore";

const themes = {
  default: "bg-white text-black",
  "organ-transplant": "bg-green-100 text-green-900",
  "cosmetic-surgery": "bg-pink-100 text-pink-900",
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const html = document.documentElement;
    html.className = themes[theme] || themes["default"];
  }, [theme]);

  return <>{children}</>;
};
