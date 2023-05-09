import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/AppContext.jsx";
import useForms from "../../utils/useForms.jsx";
import "./EditUserData.css";



const EditUserData = () => {
const {store, action}=useStore();
const {userInfo} = store;
const {utils, handleGetUserInfo, handleLogout, setUserInfo}=action;


const {formInput, myHandleInput, setFormInput}=useForms({
  name: userInfo?.name,
  lastname: userInfo?.lastname,
  email: userInfo?.email,
  weight: userInfo?.weight,
  //height: userInfo?.height,
  height : userInfo?.size,
  bikeType: userInfo?.["bike type"]      
});
console.log(formInput);
console.log(formInput.newPassword);

const {fetchEditUser, fetchDeleteUser, fetchEditUserPassword} = utils;
// const {name, lastname, email, weight, height, bikeType}=formInput;

const navigate = useNavigate();

console.log(userInfo);

// useEffect(()=>{
// {
// // const localUserInfo = handleGetUserInfo();
//   // //console.log(localUserInfo);
//   // localUserInfo.then((data)=>{
//   //   console.log(data)
//   //   setFormInput({
//   //     name: data?.name,
//   //     lastname: data?.lastname,
//   //     email: data?.email,
//   //     weight: data?.weight,
//   //     height: data?.height,
//   //     bikeType: data?.bikeType      
//   //   });
//   //   console.log(formInput);
//   // });
  
// } 
// console.log(userInfo);
// // setFormInput({
// //       name: userInfo?.name,
// //       lastname: userInfo?.lastname,
// //       email: userInfo?.email,
// //       weight: userInfo?.weight,
// //       //height: userInfo?.height,
// //       height : userInfo?.size,
// //       bikeType: userInfo?.["bike type"]      
// //     });
//   //console.log(formInput);

// //const myUserInfo = handleGetUserInfo();
// // setFormInput({
// //       name: myUserInfo?.name,
// //       lastname: myUserInfo?.lastname,
// //       email: myUserInfo?.email,
// //       weight: myUserInfo?.weight,
// //       height: myUserInfo?.height,
// //       bikeType: myUserInfo?.bikeType      
// //     });
// // console.log(formInput);

// },[]);

//console.log(formInput);

const handleUpdateUser=async()=>{
  // const body = {
  //       name,
  //       lastname,
  //       email,
  //       weight,
  //       size,
  //       bikeType
  // }
  const body = {
        name: "Ruth", 
        lastname: "Hernica", 
        email: "lucalobe@gmail.com",
        weight: "mucho",
        size: "muy alto",
        bikeType: "molonas"
  } //Necesita todas las claves. No será un problema cuando populemos los inputs.
    
  const editedUser = await fetchEditUser(userInfo?.id, body);
  
  if (!editedUser) return alert("Ha habido un problema actualizando la información")

  setUserInfo(editedUser);
  alert("Información de usuario actualizada");
  navigate("/");
}
const handleChangePassword=async()=>{

  console.log(formInput.newPassword);
  if (!formInput.newPassword) return alert("Debe indicar una contraseña");
  if (formInput.newPassword !==formInput.newPasswordValidation) return alert("Debe indicar una contraseña");

  const body = {
    password : formInput.newPassword
  }
  const editedUser = await fetchEditUserPassword(userInfo?.id, body);
  
  if (!editedUser) return alert("Ha habido un problema con el cambio de contraseña")

  alert(editedUser);

  navigate("/");
}
const handleDeleteUser =  async()=>{
  const response = confirm("Esta seguro que desea eliminar su cuenta?");
  console.log(response);
  if (!response) return;
  
  const isUserDeleted = await fetchDeleteUser(userInfo?.id);
  if (isUserDeleted) {
    handleLogout();
    alert("Usuario eliminado correctamente");
    navigate("/");
    return
  }
  alert("Ha habido un problema eliminando la cuenta");

}
    
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
              value={formInput[name]}
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
              value={formInput[name]}
              onChange={myHandleInput}
              name="lastname"
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
    
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formSizeSelect" className="form-label">
              Altura
            </label>
            <select id="formSizeSelect" onChange={myHandleInput} name="height" className="form-select">
              <option >Elige tu altura</option>
              <option value={"XS"}>150-160 cm</option>
              <option value={"S"}>161-170 cm</option>
              <option value={"M"}>171-180 cm</option>
              <option value={"L"}>181-190 cm</option>
              <option value={"XL"}>+ 190 cm</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="formWeightSelect" className="form-label">
              Peso
            </label>
            <select id="formWeightSelect" onChange={myHandleInput} className="form-select" name="weight">
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
            <label htmlFor="formBikeSelect" className="form-label">
              Tipo de bicicleta
            </label>
            <select id="formBikeSelect" onChange={myHandleInput} className="form-select" name="bikeType">
              <option>Elige tu tipo de bicicleta</option>
              <option>Carretera</option>
              <option>Montaña</option>
              <option>BMX</option>
              <option>Urban</option>
            </select>
          </div>
        </div>

        <button type="button" className="databtn sendBtn" onClick={handleUpdateUser}>
          Actualizar
        </button>
        <hr />

        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="newPassword" className="form-label">
              Nueva contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              aria-describedby="newPassword"
              placeholder="Nueva contraseña"
              value={formInput[name]}
              onChange={myHandleInput}
              name="newPassword"
            />
          </div>
        

          <div className="col-6">
            <label htmlFor="newPasswordValidation" className="form-label">
              Verifique la contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="newPasswordValidation"
              aria-describedby="newPasswordValidation"
              placeholder="Valide su contraseña"
              value={formInput[name]}
              onChange={myHandleInput}
              name="newPasswordValidation"
            />
          </div>
        </div>

        <button type="button" className="databtn deleteBtn" onClick={handleChangePassword}>
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

 {/* <div className="mb-3">
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
        </div> */}