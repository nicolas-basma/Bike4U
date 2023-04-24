import React from "react";
import { RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";

import router from "./routes/router.jsx";
import MyNavbar from "./component/MyNavbar/MyNavbar.jsx";
import useStore,{ AppContext } from "./store/AppContext.jsx";
import { useState } from "react";

import MyFooter from "./component/MyFooter/MyFooter.jsx";
import All from "./All.js";
import allMessages from "../../lang/messages.js";
//import exports from "webpack";
//export const lenguaje = {};

const Layout = () => {

  // const {store} = useStore();
  // const {lang} = store;
  // console.log(store);

 const [lang, setLang] = useState("es");
 //lenguaje = {lang, setLang};

  return (
    <div>
      <AppContext>
        <IntlProvider locale={lang} defaultLocale="es" messages={allMessages[lang]}>
          <RouterProvider router={router}>
            <MyNavbar />
            <All />
            <MyFooter />
          </RouterProvider>
        </IntlProvider>
      </AppContext>
    </div>
  );
};

export default Layout;
