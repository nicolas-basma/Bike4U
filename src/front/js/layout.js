import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./component/MyNavbar/MyNavbar.jsx";
import MyFooter from "./component/MyFooter/MyFooter.jsx";
import { AppContext } from "./store/AppContext.jsx";

const Layout = () => {
  return (
    <AppContext>
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </AppContext>
  );
};

export default Layout;
