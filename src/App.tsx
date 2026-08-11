import "./index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <div>
        <Link to="/">Главная страница</Link>
        <Link to="/about">О сайте</Link>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
