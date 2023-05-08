import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import AboutUs from "../views/AboutUs/AboutUs.jsx";
import Layout from "../layout.js";
import CustomizeBike from "../views/CustomizeBike/CustomizeBike.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import PasswordRecovery from "../views/PasswordRecovery/PasswordRecovery.jsx";
import Faqs from "../views/FAQS/Faqs.jsx";
import LegalPolicy from "../views/LegalPolicy/LegalPolicy.jsx";
import ProductView from "../views/ProductView/ProductView.jsx";
import FavoritesView from "../views/Favorites/FavoritesView.jsx";
import EditUserData from "../views/EditUserData/EditUserData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/customizeBike",
        element: <CustomizeBike />,
      },
      {
        path: "/favorites",
        element: <FavoritesView />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Profile",
        element: <EditUserData />,
      },
      {
        path: "/PasswordRecovery",
        element: <PasswordRecovery />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/legalpolicy",
        element: <LegalPolicy />,
      },
      {
        path: "/product/:id",
        element: <ProductView />,
      },
      {
        path: "/product/:id",
        element: <ProductView />,
      },
      {
        path: "/product/:id",
        element: <ProductView />,
      },
    ],
  },
]);

export default router;
