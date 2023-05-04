import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const MyUserLoginDropdown = ({closeNavbar}) => {
  const { action } = useStore();
  const { useForms } = action;
  const { formInput, myHandleInput } = useForms();

  const handleLogin = (event) => {

    event.preventDefault();

    const { userEmail, password, rememberMe } = formInput;

    const data = {
      email : userEmail,
      password,
      rememberMe,
    };     
    console.log(data);

    const localURL="http://127.0.0.1:3001"

    fetch(localURL + "/api/login",
    {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
    .then((res)=>{
      const errorMessage = "Ha habido un error en el login"
      if (res.status != 200) {
        //alert(errorMessage);
        throw new Error(`Error: ${res?.data?.msg}`);
      }
      return res.json()})
    .then((data)=>{
  
      console.log(data);
      localStorage.setItem("userSessionToken", JSON.stringify(data["login_token"]));
      localStorage.setItem("loggedUser", JSON.stringify(data["Name"]));
    })
    .catch((err)=>console.log(err))
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
