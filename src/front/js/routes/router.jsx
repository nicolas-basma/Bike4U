import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.jsx";
import AboutUs from "../views/AboutUs.jsx";
import All from "../app.js";

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
        path: "/contactus",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
