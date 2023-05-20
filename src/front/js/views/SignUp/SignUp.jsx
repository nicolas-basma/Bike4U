import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/AppContext.jsx";

import "./SignUp.css";



const SignUp = () => {

  const navigate = useNavigate();

  const {store, action}=useStore();
  const {useForms, utils}=action;
  const {formInput, myHandleInput}=useForms();
  const {fetchSingup} = utils;
  const {name, lastname, email, password, confirmPassword, weight, height, bike_type}=formInput;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(prev=>!prev);
  }

  //console.log(formInput);

    const handleCreateUser=async()=>{
      const body = {
            name,
            lastname,
            email,
            password,
            weight,
            size : height,
            bike_type
      }
      
      if (password !== confirmPassword) return alert("Las contraseñas no coinciden");
      
      const isUserCreated = await fetchSingup(body);
      //console.log(isUserCreated);
      
      if (!isUserCreated) return alert("Ha habido un problema con la creación del usuario")

      alert("Usuario creado correctamente, proceda a logearse");
      navigate("/");
        
    }
    
  return (
    <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> INTRODUZCA SUS DATOS</h1>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="inputName"
              placeholder="Introduzca su nombre"
              onChange={myHandleInput}
              name="name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="inputLastname" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastname"
              aria-describedby="inputLastname"
              placeholder="Introduzca sus apellidos"
              onChange={myHandleInput}
              name="lastname"
            />
          </div>
        </div>

        <div className="row mb-3 center">
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="inputEmail"
              placeholder="Ej. juan@perez.com"
              name="email"
              onChange={myHandleInput}
            />
          </div>
        </div>

        <div className="row mb-3 center">
          <div className="col-6 position-relative">
            <label htmlFor="inputPassword1" className="form-label">
              Contraseña
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="inputPassword1"
                aria-describedby="inputPassword1"
                placeholder="Introduzca su contraseña"
                name="password"
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
          </div>

          <div className="col-6 position-relative">
            <label htmlFor="inputPassword2" className="form-label">
              Confirme su contraseña
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="inputPassword2"
                aria-describedby="inputPassword2"
                placeholder="Confirme su Contraseña"
                name="confirmPassword"
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
          </div>
        </div>
          <div className="signUpSecondTitle">
            <h1>INTRODUZCA SUS CARACTERÍSTICAS</h1>
          </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-12">
              <label htmlFor="disabledSelect" className="form-label">
                Seleccione su altura
              </label>
              <select  onChange={myHandleInput} name="height" className="form-select" aria-describedby="selectSize">
                <option >Elige tu altura</option>
                <option value={"s"}>150-160 cm</option>
                <option value={"s"}>161-170 cm</option>
                <option value={"m"}>171-180 cm</option>
                <option value={"l"}>181-190 cm</option>
                <option value={"l"}>+ 190 cm</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="disabledSelect" className="form-label">
                Seleccione su peso
              </label>
              <select onChange={myHandleInput} className="form-select" name="weight" aria-describedby="selectWeight">
                <option>Elige tu peso</option>
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
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label" id="typeOfBike">
                  Tipo de bicicleta
                </label>
                <select onChange={myHandleInput} className="form-select" name="bike_type" aria-describedby="typeOfBike">
                  <option>Elige tu tipo de bicicleta</option>
                  <option value={"road"}>Carretera</option>
                  <option value={"mtb"}>Montaña</option>
                  <option value={"urban"}>Urban</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="sendBtn" onClick={handleCreateUser} aria-describedby="regiserButton">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default SignUp;