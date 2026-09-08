import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


    
  const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
         {
        path: "/",
        element: <Home />
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
]);

export default router;