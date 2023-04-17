import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import AboutUs from "../views/AboutUs/AboutUs.jsx";
import All from "../All.js";

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
      
    ],
  },
]);

export default router;
