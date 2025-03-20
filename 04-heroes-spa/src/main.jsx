import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HeroesApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
