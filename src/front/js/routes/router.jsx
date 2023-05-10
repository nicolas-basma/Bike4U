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
import ProtectedPath from "../component/ProtectedPath/ProtectedPath.jsx";
import { element } from "prop-types";

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
        path: "/product",
        children: [
          {
            path: "/product/:terrain",
            children: [
              {
                path: "/product/:terrain/:id",
                element: <ProductView />,
              },
            ],
          },
        ],
      },
      {
        path: "/favorites",
        element: (
          <ProtectedPath>
            <FavoritesView />
          </ProtectedPath>
        ),
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Profile",
        element: (
          <ProtectedPath>
            <EditUserData />
          </ProtectedPath>
        ),
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
    ],
  },
]);

export default router;
