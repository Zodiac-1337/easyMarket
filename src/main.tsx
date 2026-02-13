import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/index.scss";
import App from "@/app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, ThemeProvider } from "@/app/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
