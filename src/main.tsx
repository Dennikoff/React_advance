import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";
import { App } from "./App";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
