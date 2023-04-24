import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

import clearFormInput from "../utils/clearFormInput.js";
import allMessages from "../../../lang/messages.js";

const Context = createContext();

export const AppContext = ({ children }) => {
  //env
  const { logo, contactMail } = envParameters;
  
  //useStates
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("en");
  
  //Handles
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleLogin = ()=>{

    //Function required to handle the login in the userLoginDropdown.
    //if loging is ok, clear formInputs. Rerender views. Termany operators?
    //if loging is nok, clear only password.

  }
  
  //Flux
  const store = {
    show,
    lang,
    allMessages,
    logo,
    contactMail,
  };
  const action = {
    setShow,
    setLang,
    handleClose,
    handleShow,
    handleLogin,
    clearFormInput
  };

  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
