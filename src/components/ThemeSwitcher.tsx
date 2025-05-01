import React from "react";
import { useThemeStore } from "../themes/themeStore";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <select
      className="p-2 border rounded"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="organ-transplant">Organ Transplant</option>
      <option value="cosmetic-surgery">Cosmetic Surgery</option>
    </select>
  );
};

export default ThemeSwitcher;
