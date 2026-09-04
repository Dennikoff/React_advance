import React from "react";
import { classNames } from "@/shared/lib";

import classes from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";

type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  variant?: AppLinkVariant;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    children,
    className,
    variant = "primary",
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(classes.AppLink, {}, [className, classes[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
