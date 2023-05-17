import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const PasswordRecovery =()=>{

    const navigate = useNavigate();

    const { action } = useStore();
    const { useForms, utils } = action;
    const {fetchRestorePassword} = utils;
    
    const {formInput, myHandleInput, setFormInput}=useForms();


    const handleRecoverPassword = (()=>{
        
        fetchRestorePassword(formInput["email"]);
        alert("Revise su correo electrónico")
        navigate("/");
        return
    })

    return(
         <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
        <FormattedMessage id="recoverYourPasswordTitle"></FormattedMessage>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formName" className="form-label">
            <FormattedMessage id="recoverYourPassword"></FormattedMessage>
            </label>
            <input
              type="text"
              className="form-control"
              id="formName"
              aria-describedby="emailHelp"
              placeholder="Introduzca su nombre"
              value={formInput[name]}
              onChange={myHandleInput}
              name="name"
            />
          </div>
        </div>       

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formEmail" className="form-label">
            <FormattedMessage id="recoverYourPasswordEmail"></FormattedMessage>
            </label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder="Ej. juan@perez.com"
              value={formInput[name]}
              name="email"
              onChange={myHandleInput}
            />
          </div>
        </div>

        <button type="button" className="databtn sendBtn" onClick={handleRecoverPassword}>
        <FormattedMessage id="recoverYourPasswordButon"></FormattedMessage>
        </button>

      </div>
    </form>
    )
};

export default PasswordRecovery;