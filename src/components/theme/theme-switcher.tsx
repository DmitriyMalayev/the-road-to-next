"use client";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="w-full px-2"
      onClick={toggleTheme}
      variant="outline"
      size="icon"
    >
      {theme === "system" ? <LucideSun /> : <LucideMoon />}
      Switch Theme
    </Button>
  );
};

export default ThemeSwitcher;
