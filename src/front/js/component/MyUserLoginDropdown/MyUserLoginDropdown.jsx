import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const MyUserLoginDropdown = ({closeNavbar}) => {
  const { action } = useStore();
  const { useForms, utils, setUserAsLogged, handleGetUserInfo, handleIsTokenValid } = action;
  const { formInput, myHandleInput } = useForms();
  const { fetchLogin } = utils;

  const handleLogin = async(event) => {

    event.preventDefault();

    const { userEmail, password, rememberMe } = formInput;

    const data = {
      email : userEmail,
      password,
      rememberMe,
    };     
    
    closeNavbar();

    const loginProcess = await fetchLogin(data);
    
    if (loginProcess) {
      setUserAsLogged();
      handleGetUserInfo();
      //handleIsTokenValid();
    }

  }

  return (
    <div className="dropdown onTop">
      <button
        type="button"
        className="btn button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
      >
        <FormattedMessage id="userLoginDropdownMainButton"></FormattedMessage>
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__email"
              className="form-label"
            >
              <FormattedMessage id="userLoginDropdownEmail"></FormattedMessage>
            </label>
            <input
              type="email"
              className="form-control"
              id="MyUserLoginDropdown-input__email"
              placeholder="email@example.com"
              name="userEmail"
              value={formInput[name]}
              onChange={myHandleInput}
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__password"
              className="form-label"
            >
              <FormattedMessage id="userLoginDropdownPassword"></FormattedMessage>
            </label>
            <input
              type="password"
              className="form-control"
              id="MyUserLoginDropdown-input__password"
              placeholder="Password"
              name="password"
              value={formInput[name]}
              onChange={myHandleInput}
            ></input>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="MyUserLoginDropdown-input__rememberMe"
                name="rememberMe"
                value={formInput[name]}
                onChange={myHandleInput}
              ></input>
              <label className="form-check-label" htmlFor="dropdownCheck">
                <FormattedMessage id="userLoginDropdownRemember"></FormattedMessage>
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleLogin}
          >
            <FormattedMessage id="buttonSignIn"></FormattedMessage>
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link onClick={closeNavbar} className="btn dropdown-item" to="/SignUp">
          <FormattedMessage id="userLoginDropdownNewUser"></FormattedMessage>
        </Link>
        <Link onClick={closeNavbar} className="btn dropdown-item" to="/PasswordRecovery">
          <FormattedMessage id="userLoginDropdownForgotPassword"></FormattedMessage>
        </Link>
      </div>
    </div>
  );
};

export default MyUserLoginDropdown;
