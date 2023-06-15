import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./MyUserLoginDropdown.css";
import useStore from "../../store/AppContext.jsx";
import swal from "sweetalert2";

const MyUserLoginDropdown = ({closeNavbar}) => {
  const { action, store } = useStore();
  const { useForms, utils, setUserAsLogged, handleGetUserInfo, handleIsTokenValid, setIsInvited } = action;
  const { formInput, myHandleInput, handleInput } = useForms({
    userEmail : "",
    password : "",
    rememberMe: false,
  }     
  );
  const { fetchLogin } = utils;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(prev=>!prev);
  }

  const handleLogin = async(event) => {
    

    event.preventDefault();
    setIsInvited(false);

    const { userEmail, password, rememberMe } = formInput;

    const data = {
      email : userEmail,
      password,
      rememberMe,
    };     
    
    closeNavbar();

    const loginProcess = await fetchLogin(data);
    //
    if (loginProcess === true) {
      setUserAsLogged();
      handleGetUserInfo();
      return;
    }
    swal.fire({
      title: "Error!",
      text: loginProcess,
      icon: "error",
      confirmButtonText: "Ok",
    });
    return ;
    
  }

  const handleCheckChange = (e) => {
    handleInput(e.target.checked, e.target.name);
  };

  return (
    <div className="dropdown onTop
    ">
      <button
        type="button"
        className="btn button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <FormattedMessage id="userLoginDropdownMainButton"/>
      </button>
      <div className="dropdown-menu dropdown-menu-end wrapper myDropDownMediaQuery">
        <form className="p-0 m-0 px-sm-4 py-sm-3 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__email"
              className="form-label"
            >
              <FormattedMessage id="userLoginDropdownEmail"/>
            </label>
            <input
              type="email"
              className="form-control"
              id="MyUserLoginDropdown-input__email"
              placeholder="email@example.com"
              aria-describedby="LoginDropdown-input__email"
              name="userEmail"
              value={formInput?.["userEmail"]}
              onChange={myHandleInput}
            />
          </div>
          <div className="mb-3 position-relative">
            <label
              htmlFor="MyUserLoginDropdown-input__password"
              className="form-label"
            >
              <FormattedMessage id="userLoginDropdownPassword"/>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="MyUserLoginDropdown-input__password"
              placeholder="Password"
              aria-describedby="LoginDropdown-input__password"
              name="password"
              value={formInput?.["password"]}
              onChange={myHandleInput}
            />
            <button
                className="btn position-absolute top-50 end-0 me-2"
                type="button"
                onClick={handleToggleShowPassword}
                >
                  <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </button>
          </div>
          <div className="mb-3">
            <div className="form-check d-flex justify-content-center">
              <input
                type="checkbox"
                className="form-check-input mx-3"
                id="dropdownCheck"
                name="rememberMe"
                value={formInput?.["rememberMe"]}
                onChange={handleCheckChange}
              />
              <label className="form-label" htmlFor="dropdownCheck">
                <FormattedMessage id="userLoginDropdownRemember"/>
              </label>
            </div>
          </div>
          <button
            className="loginBtn w-100 mx-auto dropdown-btn mt-1"
            onClick={handleLogin}
          >
            <FormattedMessage id="buttonSignIn"/>
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link onClick={closeNavbar} className="btn dropdown-item button nav-item form-label" to="/SignUp">
          <FormattedMessage id="userLoginDropdownNewUser"/>
        </Link>
        <Link onClick={closeNavbar} className="btn dropdown-item button nav-item form-label" to="/PasswordRecovery">
          <FormattedMessage id="userLoginDropdownForgotPassword"/>
        </Link>
      </div>
    </div>
  );
};

export default MyUserLoginDropdown;