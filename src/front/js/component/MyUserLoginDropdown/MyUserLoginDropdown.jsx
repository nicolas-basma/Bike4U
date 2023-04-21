import React from "react";

const MyUserLoginDropdown = () => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn button mb-2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        LOGIN
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleDropdownFormPassword1"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            ></input>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              ></input>
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          New around here? Sign up
        </a>
        <a className="dropdown-item" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default MyUserLoginDropdown;