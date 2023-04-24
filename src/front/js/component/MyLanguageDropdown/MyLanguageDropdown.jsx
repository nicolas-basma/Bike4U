import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const MyLanguageDropdown = ({handle}) => {
  const { store, action } = useStore();
  const {lang } = store;
  const { handleLogin, useForms } = action;
  const { formInput, myHandleInput } = useForms();

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn button mb-2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="inside"
      >
        {lang}
      </button>
      <div className="dropdown-menu dropdown-menu-end">

          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__email"
              className="form-label"
            >
              <FormattedMessage id="myNavbarButtomLangEsp"></FormattedMessage>
            </label>

            <button
            type="submit"
            className="btn btn-primary"
            onClick={handle}
          >
            <FormattedMessage id="myNavbarButtomLangEsp"></FormattedMessage>
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handle}
          >
            <FormattedMessage id="myNavbarButtomLangEng"></FormattedMessage>
          </button>
        </div>
      </div>  
    </div>
  );
};

export default MyLanguageDropdown;
