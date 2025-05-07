import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CalendarApp } from "./CalendarApp.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </StrictMode>
);
