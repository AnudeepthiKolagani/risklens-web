import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

document.documentElement.classList.add("dark");
document.documentElement.dataset.theme = "dark";
document.documentElement.dataset.terminalTheme = "dark";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
