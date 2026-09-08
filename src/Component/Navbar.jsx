import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar ${
        theme === "light" ? "navbar-light" : "navbar-dark"
      }`}
    >
      <NavLink className="nav-logo" to="/" aria-label="ShopCart home">
        <span className="nav-logo__mark">S</span>
        <span>ShopCart</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

      <button
        className="theme-toggle"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        <span aria-hidden="true">{theme === "light" ? "Moon" : "Sun"}</span>
        <span>{theme === "light" ? "Dark" : "Light"}</span>
      </button>
    </nav>
  );
};

export default Navbar;