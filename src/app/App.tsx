import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { Suspense, useState } from "react";
import { useTheme } from "./provider/ThemeProvider/lib/ThemeContext";
import { ClassNames } from "@/shared/lib";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <div>
        <Link to="/">Главная страница</Link>
        <Link to="/about">О сайте</Link>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
