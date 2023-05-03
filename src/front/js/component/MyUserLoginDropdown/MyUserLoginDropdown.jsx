import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const MyUserLoginDropdown = () => {
  const { action } = useStore();
  const { handleLogin, useForms } = action;
  const { formInput, myHandleInput } = useForms();

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
              name="MyUserLoginDropdown-input__email"
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
              placeholder={
                <FormattedMessage id="userLoginDropdownPassword"></FormattedMessage>
              }
              name="MyUserLoginDropdown-input__password"
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
                name="MyUserLoginDropdown-input__rememberMe"
                value={formInput[name]}
                onChange={myHandleInput}
              ></input>
              <label className="form-check-label" htmlFor="dropdownCheck">
                <FormattedMessage id="userLoginDropdownRemember"></FormattedMessage>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            <FormattedMessage id="buttonSignIn"></FormattedMessage>
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="btn dropdown-item" to="/SignUp">
          <FormattedMessage id="userLoginDropdownNewUser"></FormattedMessage>
        </Link>
        <Link className="btn dropdown-item" to="/PasswordRecovery">
          <FormattedMessage id="userLoginDropdownForgotPassword"></FormattedMessage>
        </Link>
      </div>
    </div>
  );
};

export default MyUserLoginDropdown;
