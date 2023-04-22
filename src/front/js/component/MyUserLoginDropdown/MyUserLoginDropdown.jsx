import React from "react";
import { Link } from "react-router-dom";

import useForms from "../../store/useForms.jsx";
import useStore from "../../store/AppContext.jsx";

const MyUserLoginDropdown = () => {

  const { action } = useStore();
  const {handleLogin} = action;
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
        LOGIN
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__email"
              className="form-label"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="MyUserLoginDropdown-input__email"
              placeholder="email@example.com"
              name="MyUserLoginDropdown-input__email"
              value={formInput["name"]}
              onChange={myHandleInput}
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="MyUserLoginDropdown-input__password"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="MyUserLoginDropdown-input__password"
              placeholder="Password"
              name="MyUserLoginDropdown-input__password"
              value={formInput["name"]}
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
                value={formInput["name"]}
                onChange={myHandleInput}
              ></input>
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Sign in
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="btn dropdown-item" to="/SignUp">
            New around here? Sign up!
        </Link>
        <Link className="btn dropdown-item" to="/PasswordRecovery">
            Forgot password?
        </Link>

      </div>
    </div>
  );
};

export default MyUserLoginDropdown;
