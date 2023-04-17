import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes/router.jsx";
import MyNavbar from "./component/MyNavbar/MyNavbar.jsx";
import { AppContext } from "./store/AppContext.jsx";
import MyFooter from "./component/MyFooter/MyFooter.jsx";
import All from "./All.js";

const Layout = () => {
  return (
    <div>
      <AppContext>
        <RouterProvider router={router}>
          <MyNavbar />
          <All />
          <MyFooter />
        </RouterProvider>
      </AppContext>
    </div>
  );
};

export default Layout;
