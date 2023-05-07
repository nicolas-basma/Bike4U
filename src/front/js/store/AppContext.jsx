import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

import clearFormInput from "../utils/clearFormInput.js";
import useForms from "../utils/useForms.jsx";

import allMessages from "../../../lang/messages.js";
import { IntlProvider } from "react-intl";
//import { lenguaje } from "../layout.js";
import carouselHomePhotos from "../img/arrayPhotos.js";
import utils from "../utils";

const Context = createContext();

export const AppContext = ({ children }) => {
  //env
  const { logo, contactMail, flagEEUU, flagEspana } = envParameters;

  //useStates
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("es");
  // let lang = lenguaje.lang;
  // const setLang = lenguaje.setLang;

  //Handles
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleLogin = () => {
  //   //Function required to handle the login in the userLoginDropdown.
  //   //if loging is ok, clear formInputs. Rerender views. Termany operators?
  //   //if loging is nok, clear only password.
  // };

  //Flux
  const store = {
    show,
    lang,
    allMessages,
    logo,
    contactMail,
    flagEEUU,
    flagEspana,
    carouselHomePhotos,
  };
  const action = {
    setShow,
    setLang,
    handleClose,
    handleShow,
    clearFormInput,
    useForms,
    utils
  };

  return (
    <>
      <Context.Provider value={{ store, action }}>
        <IntlProvider
          locale={lang}
          defaultLocale="es"
          messages={allMessages[lang]}
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
