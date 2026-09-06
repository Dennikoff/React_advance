import React from "react";
import { classNames } from "@/shared/lib";

import classes from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/app/provider/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(classes.ThemeSwitcher, {}, [className])}>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};
