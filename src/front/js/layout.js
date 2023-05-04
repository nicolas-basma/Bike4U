import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./component/MyNavbar/MyNavbar.jsx";
import MyFooter from "./component/MyFooter/MyFooter.jsx";

const Layout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default Layout;
