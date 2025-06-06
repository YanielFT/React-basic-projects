import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { SnackbarProvider } from "notistack";
import "./styles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider>
          <AppTheme>
            <JournalApp />
          </AppTheme>
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
