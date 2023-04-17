import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const { logo, contactMail } = envParameters;
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [cityContact, setCityContact] = useState("");
  const [mensaggeContact, setMensaggeContact] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNameContact = (event) => setNameContact(event.target.value);
  const handleEmailContact = (event) => setEmailContact(event.target.value);
  const handleCityContact = (event) => setCityContact(event.target.value);
  const handleMensagge = (event) => setMensaggeContact(event.target.value);

  const store = {
    show,
    contactMail,
    logo,
    nameContact,
    emailContact,
    cityContact,
    mensaggeContact,
  };
  const action = {
    setShow,
    handleClose,
    handleShow,
    setCityContact,
    setEmailContact,
    setNameContact,
    handleNameContact,
    handleCityContact,
    handleEmailContact,
    handleMensagge,
  };
  return (
    <>
      <Context.Provider value={{ store, action }}>{children}</Context.Provider>
    </>
  );
};

const useStore = () => useContext(Context);

export default useStore;
