import React from "react";
import CosmeticSurgery from "./pages/CosmeticSurgery";
import OrganTransplant from "./pages/OrganTransplant";
import DefaultPage from "./pages/Default.tsx";
import { useThemeStore } from './store/themeStore.ts';

function App() {
  const theme = useThemeStore((state) => state.theme);

  switch (theme) {
    case "cosmetic-surgery":
      return <CosmeticSurgery />;
    case "organ-transplant":
      return <OrganTransplant />;
    default:
      return <DefaultPage />;
  }
}

export default App;
