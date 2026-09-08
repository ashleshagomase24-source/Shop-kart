
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import ThemeProvider from "./Context/ThemeProvider";
import ErrorBoundary from "./Component/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </ThemeProvider>
);
