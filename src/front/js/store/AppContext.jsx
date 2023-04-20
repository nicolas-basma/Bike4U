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
  // const handleEmailContact = (event) => setEmailContact(event.target.value);
  // const handleCityContact = (event) => setCityContact(event.target.value);
  // const handleMensagge = (event) => setMensaggeContact(event.target.value);

  const store = {
    show,
    // contactMail,
    logo,
    // nameContact,
    // emailContact,
    // cityContact,
    // mensaggeContact,
    contact,
  };
  const action = {
    setShow,
    handleClose,
    handleShow,
    // setCityContact,
    // setEmailContact,
    // setNameContact,
    handleContact,
    // handleCityContact,
    // handleEmailContact,
    // handleMensagge
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
