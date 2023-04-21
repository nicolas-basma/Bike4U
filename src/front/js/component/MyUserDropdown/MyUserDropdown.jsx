import React from "react";
import Dropdown from 'react-dropdown';

const MyUserLoginDropdown =()=>{

    const options = [
        'one', 'two', 'three', 4,5,6,7
      ];
      const defaultOption = options[0];
      

   return (
    <div>
        <div class="dropdown">
            <button type="button" class="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Dropdown form
            </button>
            <form class="dropdown-menu p-4">
                <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck2"></input>
                        <label class="form-check-label" for="dropdownCheck2">
                        Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
   )

}

export default MyUserLoginDropdown;