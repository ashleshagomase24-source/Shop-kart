
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ThemeProvider } from "./Context/ThemeContext";
import ErrorBoundary from "./Component/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </ThemeProvider>
);
