import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';
import Shop from '../components/Shop';
import { getProductsAndCartData } from "../loaders/getCart&ProductsData";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getProductsAndCartData,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <Shop />
      }
    ]
  }
])

export default router