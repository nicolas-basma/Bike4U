import React from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/AppContext.jsx";

const PasswordRecovery =()=>{

    const navigate = useNavigate();

    const { action } = useStore();
    const { useForms, utils } = action;
    const {fetchRestorePassword} = utils;
    
    const {formInput, myHandleInput, setFormInput}=useForms();


    const handleRecoverPassword = (()=>{
        console.log(formInput["email"]);
        fetchRestorePassword(formInput["email"]);
        alert("Revise su correo electrónico")
        navigate("/");
        return
    })

    return(
         <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> RECUPERE SU CONTRASEÑA </h1>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formName" className="form-label">
              Nombre
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
              Email
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
          Recuperar la contraseña
        </button>

      </div>
    </form>
    )
};

export default PasswordRecovery;