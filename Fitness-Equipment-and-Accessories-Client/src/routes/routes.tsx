import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import About from "../pages/About";
import Products from "../pages/products/Products";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/home/Home";
import ProductDetails from "../pages/products/productDetails/ProductDetails";

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
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
