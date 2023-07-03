import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

import "./SignUp.css";
import swal from "sweetalert2";



const SignUp = () => {

  const navigate = useNavigate();

  const {store, action}=useStore();
  const {lang, allMessages} = store;
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
      
      if (password !== confirmPassword) return (
        swal.fire({
          confirmButtonColor: '#ffd102',
          icon: 'error',
          title: 'Bike4U',
          text: 'Las contraseñas no coinciden',
          
        })
      )
      
      const isUserCreated = await fetchSingup(body);
      //console.log(isUserCreated);
      
      if (!isUserCreated) return ( swal.fire({
        confirmButtonColor: '#ffd102',
        icon: 'error',
        title: 'Bike4U',
        text: 'Ha habido un problema con la creación del usuario',
        
      }))
      swal.fire({
        confirmButtonColor: '#ffd102',
        icon: 'success',
        title: 'Bike4U',
        text: 'Usuario creado correctamente, proceda a logearse',
        
      })
      navigate("/");
        
    }
    let text = 'texto'// <FormattedMessage id="signInNameInputPlaceholder" defaultMessage="Nombre"/>
  return (  
    <form>
      <div className="wrapper d-flex justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="signUpFirstTitle">
            <h1> <FormattedMessage id="signInTitle" defaultMessage="INTRODUZCA SUS DATOS"/></h1>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
              <FormattedMessage id="signInName" defaultMessage="Nombre"/>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="inputName"
                // placeholder={<FormattedMessage id="signInNameInputPlaceholder" defaultMessage="Nombre"/>}
                placeholder={allMessages[lang].signInNameInputPlaceholder}
                onChange={myHandleInput}
                name="name"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="inputLastname" className="form-label">
              <FormattedMessage id="signInLastName" defaultMessage="Apellidos"/>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                aria-describedby="inputLastname"
                placeholder={allMessages[lang].signInLastNamePlaceholder}
                onChange={myHandleInput}
                name="lastname"
              />
            </div>
          </div>

          <div className="row mb-3 center">
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
              <FormattedMessage id="signInEmail" defaultMessage="Email"/>
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="inputEmail"
                placeholder={allMessages[lang].signInEmailPlaceholder}
                name="email"
                onChange={myHandleInput}
              />
            </div>
          </div>

          <div className="row mb-3 center">
            <div className="col-12 col-sm-6 position-relative">
              <label htmlFor="inputPassword1" className="form-label">
              <FormattedMessage id="signInPassword" defaultMessage="Contraseña"/>
              </label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="inputPassword1"
                  aria-describedby="inputPassword1"
                  placeholder={allMessages[lang].signInPasswordPlaceholder}
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

            <div className="col-12 col-sm-6 position-relative">
              <label htmlFor="inputPassword2" className="form-label">
              <FormattedMessage id="signInConfirmPassword" defaultMessage="Confirme su contraseña"/>
              </label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="inputPassword2"
                  aria-describedby="inputPassword2"
                  placeholder={allMessages[lang].signInConfirmPasswordPlaceholder}
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
            <h1><FormattedMessage id="signInSecondTitle" defaultMessage="INTRODUZCA SUS CARACTERÍSTICAS"/></h1>
          </div>

          <div className="row mb-3">

            <div className="col-12">
              <label htmlFor="disabledSelect" className="form-label">
              <FormattedMessage id="signInHeight" defaultMessage="Seleccione su altura"/>
              </label>
              <select  onChange={myHandleInput} name="height" className="form-select" aria-describedby="selectSize">
                <option >{allMessages[lang].signInOptionHeight}</option>
                <option value={"s"}>150-160 cm</option>
                <option value={"s"}>161-170 cm</option>
                <option value={"m"}>171-180 cm</option>
                <option value={"l"}>181-190 cm</option>
                <option value={"l"}>+ 190 cm</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="disabledSelect" className="form-label">
                <FormattedMessage id="signInWeight" defaultMessage="Seleccione su peso"/>
                </label>
                <select onChange={myHandleInput} className="form-select" name="weight" aria-describedby="selectWeight">
                  <option>{allMessages[lang].signInOptionWeight}</option>
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

          <div className="row mb-3 center">
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label" id="typeOfBike">
                <FormattedMessage id="signInBikeType" defaultMessage="Tipo de bicicleta"/>
                </label>
                <select onChange={myHandleInput} className="form-select" name="bike_type" aria-describedby="typeOfBike">
                  <option>{allMessages[lang].signInOptionBikeType}</option>
                  <option value={"road"}>{allMessages[lang].signInOptionBikeRoad}</option>
                  <option value={"mtb"}>{allMessages[lang].signInOptionBikeMTB}</option>
                  <option value={"urban"}>{allMessages[lang].signInOptionBikeUrban}</option>
                </select>
              </div>
            </div>
          </div>

          <button type="button" className="sendBtn" onClick={handleCreateUser} aria-describedby="regiserButton">
            <FormattedMessage id="signInSend" defaultMessage="Enviar"/>
          </button>
        </div>        
      </div>
    </form>
  );
};

export default SignUp;