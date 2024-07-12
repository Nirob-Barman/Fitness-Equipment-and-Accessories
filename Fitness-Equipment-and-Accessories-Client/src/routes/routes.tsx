import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import About from "../pages/About";
import Products from "../pages/products/Products";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
