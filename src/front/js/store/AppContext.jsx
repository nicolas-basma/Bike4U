import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

import clearFormInput from "../utils/clearFormInput.js";
import useForms from "../utils/useForms.jsx";

import allMessages from "../../../lang/messages.js";
//import { lenguaje } from "../layout.js";

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

  const handleLogin = () => {
    //Function required to handle the login in the userLoginDropdown.
    //if loging is ok, clear formInputs. Rerender views. Termany operators?
    //if loging is nok, clear only password.
  };

  //Flux
  const store = {
    show,
    lang,
    allMessages,
    logo,
    contactMail,
    flagEEUU,
    flagEspana,
  };
  const action = {
    setShow,
    setLang,
    handleClose,
    handleShow,
    handleLogin,
    clearFormInput,
    useForms,
  };

  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
