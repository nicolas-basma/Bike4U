import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

import clearFormInput from "../utils/clearFormInput.js";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const { logo, contactMail } = envParameters;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleLogin = ()=>{

    //Function required to handle the login in the userLoginDropdown.
    //if loging is ok, clear formInputs
    //if loging is nok, clear only password.

  }
  
  const store = {
    show,
    logo,
    contactMail,
  };
  const action = {
    setShow,
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
