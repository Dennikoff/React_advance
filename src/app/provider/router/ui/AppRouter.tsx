import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route path={path} element={element}/>
        ))}
      </Routes>
    </Suspense>
  );
};
