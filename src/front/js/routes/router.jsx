import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import AboutUs from "../views/AboutUs/AboutUs.jsx";
import All from "../../js/All.js";
import CustomizeBike from "../views/CustomizeBike/CustomizeBike.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import PasswordRecovery from "../views/PasswordRecovery/PasswordRecovery.jsx";
import Faqs from "../views/FAQS/Faqs.jsx";
import LegalPolicy from "../views/LegalPolicy/LegalPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <All />,
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
        path: "/SignUp",
        element: <SignUp />,
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
