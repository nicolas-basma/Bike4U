import React from "react";
import useStore from "/workspace/FinalProject/src/front/js/store/AppContext.jsx";

import "./SignUp.css";
import { json } from "react-router-dom";

const SignUp = () => {
const {store, action}=useStore();
const {useForms, myHandleInput}=action;


 const {formInput}=useForms();
    const login=()=>{
        fetch("https://3001-nicob11-finalproject-2ly8el9c9db.ws-eu96.gitpod.io/?vscodeBrowserReqId=1682707474552/api/signup",
        {method: "POST",
        headers: {"Content-Type": "application/json"},
        body: json.strigify({nombre, apellidos, email, contraseña, altura, peso, tipo})})
    }

const prueba =(e)=>{
    const{name, lastname, email, password,confirmPassword, weight, height, bikeType }=formInput;
    console.log(e)
}
    
  return (
    <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> INTRODUZCA SUS DATOS</h1>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <label for="exampleInputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Introduzca su nombre"
                onChange={myHandleInput}
                name="name"
              />
            </div>

            <div className="col-6">
              <label for="exampleInputLastname" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Introduzca sus apellidos"
                onChange={myHandleInput}
                name="lastname"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row" id="center">
            <div className="col-6">
              <label for="exampleInputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ej. juan@perez.com"
                name="email"
                onChange={myHandleInput}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row" id="center">
            <div className="col-6">
              <label for="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
             
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Introduzca su contraseña"
                name="password"
                onChange={myHandleInput}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row" id="center">
            <div className="col-6">
              <label for="exampleInputPassword2" className="form-label">
                Confirme su contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirme su Contraseña"
                name="confirmPassword"
                onChange={myHandleInput}
              />
            </div>
          </div>
        </div>
        <div className="signUpSecondTitle">
          <h1>INTRODUZCA SUS CARACTERÍSTICAS</h1>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <label for="disabledSelect" class="form-label">
                Seleccione su altura
              </label>
              <select  onChange={myHandleInput} name="height" className="form-select">
                <option value={"XS"}>150-160 cm</option>
                <option value={"S"}>161-170 cm</option>
                <option value={"M"}>171-180 cm</option>
                <option value={"L"}>181-190 cm</option>
                <option value={"XL"}>+ 190 cm</option>
              </select>
            </div>
            <div className="col-6">
              <label for="disabledSelect" class="form-label">
                Seleccione su peso
              </label>
              <select class="form-select" name="weight">
                <option>30-40 kg</option>
                <option>41-50 kg</option>
                <option>51-60 kg</option>
                <option>61-70 kg</option>
                <option>71-80 kg</option>
                <option>81-90 kg</option>
                <option>91-100 kg</option>
                <option>+100 kg</option>
              </select>
            </div>
          </div>
          <div className="row" id="center">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label" id="typeOfBike">
                  Tipo de bicicleta
                </label>
                <select className="form-select" name="bikeType">
                  <option>Carretera</option>
                  <option>Montaña</option>
                  <option>BMX</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="sendBtn" onClick={()=>console.log(e)}>
          Enviar
        </button>
        <div className="ddd">dssssssssss</div>
        <div className="ddd">dssssssssss</div>
        <div className="ddd">dssssssssss</div>
        <div className="ddd">dssssssssss</div>
        <div className="ddd">dssssssssss</div>
      </div>
    </form>
  );
};

export default SignUp;