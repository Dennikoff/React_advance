import { classNames } from "@/shared/lib";
import React from "react";

import classes from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={classes.mainLinks}>
        <AppLink to="/" variant={"secondary"}>
          Главная страница
        </AppLink>
        <AppLink to="/about" variant={"secondary"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
