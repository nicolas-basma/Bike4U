import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.jsx";
import AboutUs from "../views/AboutUs.jsx";
import All from "../app.js";
import CustomizeBike from "../views/CustomizeBike.jsx";

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
    ],
  },
]);

export default router;
