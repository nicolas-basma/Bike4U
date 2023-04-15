import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./component/MyNavbar.jsx";
import MyFooter from "./component/MyFooter.jsx";

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
