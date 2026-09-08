import React, { useCallback } from "react";
import { classNames } from "@/shared/lib";

import classes from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }, [i18n]);

  return (
    <Button
      onClick={toggleLanguage}
      variant={"text"}
      className={classNames(classes.LanguageSwitcher, {}, [className])}
    >
      {t("lnChange")}
    </Button>
  );
};
