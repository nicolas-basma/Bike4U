import React from "react";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";
import MyFlag from "./MyFlag.jsx";

import "./MyLanguageDropdown.css";

const MyLanguageDropdown = () => {
  const { store, action } = useStore();
  const { lang, flagEEUU, flagEspana } = store;
  const {setLang} = action;

  const handleLanguageChange = (e)=>{
    setLang(e.target.name);
  }

  let capitalLang = lang.toUpperCase();

  return (
    <div className="dropdown nav-item onTop">
      <button
        type="button"
        className="btn button dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="inside"
      >
        {capitalLang}
      </button>

      <ul className="dropdown-menu dropdown-menu-end  ">
        <li className="d-flex d-inline justify-content-center">
        <button type="submit" id="esp-button" className="btn other-button" name="es" onClick={handleLanguageChange}>
          <FormattedMessage id="myNavbarButtomLangEsp"></FormattedMessage> 
        </button><label htmlFor="esp-button">< MyFlag flag={flagEspana}/></label>
        </li>
        <li className="d-flex d-inline justify-content-center">
        <button type="submit" id="eng-button" className="btn other-button" name="en" onClick={handleLanguageChange}>
          <FormattedMessage id="myNavbarButtomLangEng"></FormattedMessage>  
        </button><label htmlFor="eng-button">< MyFlag flag={flagEEUU}/></label>
        </li>
      </ul>

      
      
    </div>
  );
};

export default MyLanguageDropdown;
