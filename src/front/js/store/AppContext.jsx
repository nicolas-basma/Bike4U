import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const { logo, contactMail } = envParameters;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const store = {
    show,
    logo,
    contactMail,
  };
  const action = {
    setShow,
    handleClose,
    handleShow,
  };
  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
