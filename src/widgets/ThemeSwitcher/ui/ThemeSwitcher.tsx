import React from "react";
import { classNames } from "@/shared/lib";

import classes from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/app/provider/ThemeProvider";

import LightIcon from "@/shared/assets/icons/theme-light.svg";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Theme } from "@/app/provider/ThemeProvider";
import { Button } from "@/shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(classes.ThemeSwitcher, {}, [className])}>
      <Button onClick={toggleTheme} variant={"text"}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
