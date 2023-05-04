import React from "react";
import { stringify } from 'json5';

import useStore from "../../store/AppContext.jsx";

import "./SignUp.css";



const SignUp = () => {
const {store, action}=useStore();
const {useForms}=action;
 const {formInput, myHandleInput}=useForms();
 const {name, lastname, email, password, confirmPassword, weight, height, bikeType}=formInput;

    const handleCreateUser=()=>{
      const size = height;  
      const body = {
            name,
            lastname,
            email,
            password,
            weight : "muy gorda",
            size : "negro del whatsap"
        }
        const myTempBody = JSON.stringify(body);
        console.log(myTempBody);
        //console.log(body)
        const localURL="http://127.0.0.1:3001"
        fetch(localURL + "/api/signup",
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: myTempBody})
        .then((res)=>{
          if (res.status != 200) {
            throw new Error(`Error: ${res?.data?.msg}`);
            console.log("Error en el servidor");
            return;
          } 
          console.log(res);
        })
        .catch((err)=>console.log(err))
    }
    // 
// const prueba =(e)=>{
//     const{name, lastname, email, password,confirmPassword, weight, height, bikeType }=formInput;
//     console.log(e)
// }
    
  return (
    <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> INTRODUZCA SUS DATOS</h1>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <label htmlFor="exampleInputName" className="form-label">
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
              <label htmlFor="exampleInputLastname" className="form-label">
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
              <label htmlFor="exampleInputEmail" className="form-label">
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
              <label htmlFor="exampleInputPassword1" className="form-label">
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
              <label htmlFor="exampleInputPassword2" className="form-label">
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
              <label htmlFor="disabledSelect" className="form-label">
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
              <label htmlFor="disabledSelect" className="form-label">
                Seleccione su peso
              </label>
              <select className="form-select" name="weight">
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
        <button type="button" className="sendBtn" onClick={handleCreateUser}>
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