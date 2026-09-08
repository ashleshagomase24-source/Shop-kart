import "./App.css";
import { useContext } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import {ThemeContext} from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`app-shell ${theme === "light" ? "app-shell--light" : "app-shell--dark"}`}
    >
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;