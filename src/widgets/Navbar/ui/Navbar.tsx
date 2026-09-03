import { classNames } from "@/shared/lib";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
    </div>
  );
};
