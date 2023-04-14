import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import MyFooter from "./component/MyFooter.jsx";
import MyNavbar from "./component/MyNavbar.jsx";
import ModalForm from "./component/ModalForm.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <MyNavbar />
        <ModalForm />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
