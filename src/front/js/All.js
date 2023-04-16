import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./component/MyNavbar/MyNavbar.jsx";
import MyFooter from "./component/MyFooter/MyFooter.jsx";

const All = () => {
  return (
    <>
      <MyNavbar />
      <MyFooter />
      <Outlet />
    </>
  );
};

export default All;
