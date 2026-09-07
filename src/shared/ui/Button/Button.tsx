import React, { type ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib";

import classes from "./Button.module.scss";

export type ButtonVariants = "text" | "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, variant = "primary", ...otherProps } = props;
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
