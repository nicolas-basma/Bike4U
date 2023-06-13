import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/AppContext.jsx";
import useForms from "../../utils/useForms.jsx";
import "./EditUserData.css";
import swal from "sweetalert2";

const EditUserData = () => {
  const navigate = useNavigate();
  const {store, action}=useStore();
  const {userInfo} = store;
  const {utils, handleLogout, setUserInfo}=action;
  const {fetchEditUser, fetchDeleteUser, fetchEditUserPassword} = utils;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(prev=>!prev);
  }

  const {formInput, myHandleInput, setFormInput}=useForms({
    name: userInfo?.name,
    lastname: userInfo?.lastname,
    email: userInfo?.email,
    weight: userInfo?.weight,
    height : userInfo?.size,
    bike_type: userInfo?.bike_type
  });

  //console.log(userInfo);

useEffect(()=>{

  if (userInfo !== undefined) {

    setFormInput({
      name: userInfo?.name,
      lastname: userInfo?.lastname,
      email: userInfo?.email,
      weight: userInfo?.weight,
      height : userInfo?.size,
      bike_type: userInfo?.bike_type      
    });
  }

},[userInfo]);

const handleUpdateUser=async()=>{
  const body = {
        name : formInput.name,
        lastname: formInput.lastname,
        email: formInput.email,
        weight: formInput.weight,
        size: formInput.height,
        bike_type: formInput.bike_type
  }
    
  const editedUser = await fetchEditUser(userInfo?.id, body);
  
  if (!editedUser){
    return(
      swal.fire({
        confirmButtonColor: '#ffd102',
        icon: 'error',
        title: 'Bike4U',
        text: 'Ha habido un problema actualizando la información',
        
      })
    )
  }

  setUserInfo(editedUser);
  swal.fire({
    confirmButtonColor: '#ffd102',
    icon: 'success',
    title: 'Bike4U',
    text: 'Información de usuario actualizada',
    
  })
  navigate("/");
}
const handleChangePassword=async()=>{

  //console.log(formInput.newPassword);
  if (!formInput.newPassword) return ( swal.fire({
    confirmButtonColor: '#ffd102',
    icon: 'error',
    title: 'Bike4U',
    text: 'Debe indicar una contraseña',
    
  }))
  if (formInput.newPassword !==formInput.newPasswordValidation) return ( swal.fire({
    confirmButtonColor: '#ffd102',
    icon: 'error',
    title: 'Bike4U',
    text: 'Las contraseñas no coinciden',
    
  }))

  const body = {
    password : formInput.newPassword
  }
  const editedUser = await fetchEditUserPassword(userInfo?.id, body);
  
  if (!editedUser) return ( swal.fire({
    confirmButtonColor: '#ffd102',
    icon: 'error',
    title: 'Bike4U',
    text: 'Ha habido un problema con el cambio de contraseña',
    
  }))

  alert(editedUser);

  navigate("/");
}
const handleDeleteUser =  async()=>{
  const response = confirm("Esta seguro que desea eliminar su cuenta?");
  //console.log(response);
  if (!response) return;
  
  const isUserDeleted = await fetchDeleteUser(userInfo?.id);
  if (isUserDeleted) {
    handleLogout();
    swal.fire({
      confirmButtonColor: '#ffd102',
      icon: 'success',
      title: 'Bike4U',
      text: 'Usuario eliminado correctamente',
      
    })
    navigate("/");
    return
  }
  swal.fire({
    confirmButtonColor: '#ffd102',
    icon: 'error',
    title: 'Bike4U',
    text: 'Ha habido un problema eliminando la cuenta',
    
  })
}
const myButtonColorBoolean = ()=>{
  return (formInput?.newPassword === formInput?.newPasswordValidation) && formInput?.newPassword?.length
}
const buttonState = myButtonColorBoolean() ? "sendBtn" : "deleteBtn";
    
  return (
    <form>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> DATOS PERSONALES </h1>
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
              value={formInput["name"]}
              onChange={myHandleInput}
              name="name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formLastName" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="formLastName"
              aria-describedby="emailHelp"
              placeholder="Introduzca sus apellidos"
              name="lastname"
              value={formInput["lastname"]}
              onChange={myHandleInput}             
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
              name="email"
              value={formInput["email"]}
              onChange={myHandleInput}
            />
          </div>
        </div>
    
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formSizeSelect" className="form-label">
              Altura
            </label>
            <select id="formSizeSelect" onChange={myHandleInput} name="height" className="form-select" value={formInput["height"]}>
              <option >Elige tu altura</option>
              <option value={"xs"}>150-160 cm</option>
              <option value={"s"}>161-170 cm</option>
              <option value={"m"}>171-180 cm</option>
              <option value={"l"}>181-190 cm</option>
              <option value={"xl"}>+ 190 cm</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formWeightSelect" className="form-label">
              Peso
            </label>
            <select id="formWeightSelect" onChange={myHandleInput} className="form-select" name="weight" value={formInput["weight"]}>
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

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formBikeSelect" className="form-label" >
              Tipo de bicicleta
            </label>
            <select id="formBikeSelect" onChange={myHandleInput} className="form-select" name="bike_type" value={formInput["bike_type"]}>
              <option>Elige tu tipo de bicicleta</option>
              <option value={"road"}>Carretera</option>
              <option value={"mtb"}>Montaña</option>
              <option value={"urban"}>Urban</option>
            </select>
          </div>
        </div>

        <button type="button" className="databtn sendBtn" onClick={handleUpdateUser}>
          Actualizar
        </button>
        <hr />

        <div className="row mb-3">
          <div className="col-6 position-relative">
            <label htmlFor="newPassword" className="form-label">
              Nueva contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="newPassword"
              aria-describedby="newPassword"
              placeholder="Nueva contraseña"
              name="newPassword"
              value={formInput[name]}
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
        

          <div className="col-6 position-relative">
            <label htmlFor="newPasswordValidation" className="form-label">
              Verifique la contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="newPasswordValidation"
              aria-describedby="newPasswordValidation"
              placeholder="Valide su contraseña"
              name="newPasswordValidation"
              value={formInput[name]}
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

        <button type="button" className={"databtn "+ buttonState} onClick={handleChangePassword}>
          Modificar contraseña
        </button>
        <hr />
        <button type="button" className="databtn deleteBtn" onClick={handleDeleteUser}>
          Eliminar cuenta
        </button>
      </div>
    </form>
  );
};

export default EditUserData;