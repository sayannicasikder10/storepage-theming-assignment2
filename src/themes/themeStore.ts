import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "default" | "organ-transplant" | "cosmetic-surgery";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "default",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);
