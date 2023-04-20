import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const { logo, contactMail } = envParameters;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleContact = (value, key) => {
    setContact((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const store = {
    show,
    logo,
    contact,
  };
  const action = {
    setShow,
    handleClose,
    handleShow,
    handleContact,
    setContact,
  };
  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
