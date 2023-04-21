import React from "react";

const MyUserLoginDropdown =()=>{      

   return (
    <div>
        <div className="dropdown">
            <button type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Dropdown form
            </button>
            <form className="dropdown-menu p-4">
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2"></input>
                        <label className="form-check-label" htmlFor="dropdownCheck2">
                        Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
   )

}

export default MyUserLoginDropdown;