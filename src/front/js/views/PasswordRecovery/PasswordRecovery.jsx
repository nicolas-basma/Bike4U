import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

const PasswordRecovery =()=>{

    const navigate = useNavigate();

    const { store, action } = useStore();
    const {lang, allMessages} = store;
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
        <FormattedMessage id="recoverYourPasswordTitle"/>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formName" className="form-label">
            <FormattedMessage id="recoverYourPasswordName"/>
            </label>
            <input
              type="text"
              className="form-control"
              id="formName"
              aria-describedby="emailHelp"
              placeholder={allMessages[lang].signInNameInputPlaceholder}
              name="name"
              value={formInput["name"]}
              onChange={myHandleInput}
              
            />
          </div>
        </div>       

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formEmail" className="form-label">
            <FormattedMessage id="recoverYourPasswordEmail"/>
            </label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder={allMessages[lang].signInEmailPlaceholder}
              name="email"
              value={formInput["email"]}
              onChange={myHandleInput}
            />
          </div>
        </div>

        <button type="button" className="databtn sendBtn" onClick={handleRecoverPassword}>
        <FormattedMessage id="recoverYourPasswordButon"/>
        </button>

      </div>
    </form>
    )
};

export default PasswordRecovery;