import { classNames } from "@/shared/lib";
import React from "react";

import classes from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.mainLinks}>
        <AppLink to="/" variant={"secondary"}>
          {t('navigation.main')}
        </AppLink>
        <AppLink to="/about" variant={"secondary"}>
          {t('navigation.about')}
        </AppLink>
      </div>
    </div>
  );
};
