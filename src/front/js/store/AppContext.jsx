import React, { createContext, useContext, useState, useEffect } from "react";
import { envParameters } from "./env";
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";

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
  const [isUserLogged, setIsUserLogged] = useState(localStorage.getItem("userSessionToken")!==null);
  const [userInfo, setUserInfo] = useState();

  // let lang = lenguaje.lang;
  // const setLang = lenguaje.setLang;

  //Handles
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    localStorage.removeItem("userSessionToken");
    handleIsTokenValid();
  }

  const setUserAsLogged = () => setIsUserLogged(true);


  const handleGetUserInfo = async () => {
  
    const token = localStorage.getItem("userSessionToken");
    const info = await decodeToken(token);
   // console.log(info.sub);
    
    const parsedUserInfo = info.sub;
    setUserInfo(parsedUserInfo);

  }

  const handleIsTokenValid = () => {

    const token = localStorage.getItem("userSessionToken");

    if (token === null || isExpired(token)) {
      setIsUserLogged(false)
      localStorage.removeItem("userSessionToken");
      localStorage.removeItem("loggedUser");
      alert("Su sesión ha expirado");
    } else {
      handleGetUserInfo();
      setUserAsLogged();
    }

  }

  // App initialization
  useEffect(() => {

    handleIsTokenValid();

  },[]);

  // Elementos de Debug
  useEffect(() => {console.log(userInfo)}, [userInfo]);	

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
    isUserLogged,
    userInfo
  };
  const action = {
    setShow,
    setLang,
    handleClose,
    handleShow,
    clearFormInput,
    useForms,
    utils,
    handleLogout,
    setUserAsLogged,
    setUserInfo,
    handleGetUserInfo,
    handleIsTokenValid
    
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
