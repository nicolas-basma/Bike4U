import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/AppContext.jsx";

import "./EditUserData.css";



const EditUserData = () => {
const {store, action}=useStore();
const {userInfo} = store;
const {useForms, utils, handleGetUserInfo, handleLogout}=action;
const {formInput, myHandleInput, setFormInput}=useForms();
const {fetchEditUser, fetchDeleteUser} = utils;
const {name, lastname, email, weight, height, bikeType}=formInput;

const navigate = useNavigate();

useEffect(()=>{

  // const localUserInfo = handleGetUserInfo();
  // //console.log(localUserInfo);
  // localUserInfo.then((data)=>{
  //   console.log(data)
  //   setFormInput({
  //     name: data?.name,
  //     lastname: data?.lastname,
  //     email: data?.email,
  //     weight: data?.weight,
  //     height: data?.height,
  //     bikeType: data?.bikeType      
  //   });
  //   console.log(formInput);
  // });
  
console.log(userInfo);
setFormInput({
      name: userInfo?.name,
      lastname: userInfo?.lastname,
      email: userInfo?.email,
      weight: userInfo?.weight,
      height: userInfo?.height,
      bikeType: userInfo?.bikeType      
    });
  console.log(formInput);


},[userInfo]);

//console.log(formInput);

    const handleUpdateUser=async()=>{
      const body = {
            name,
            lastname,
            email,
            //password,
            weight,
            size : height,
            bikeType
      }
      
      // if (password !== confirmPassword) return alert("Las contraseñas no coinciden");
      
      // const isUserCreated = await fetchSingup(body);
      // console.log(isUserCreated);
      
      // if (!isUserCreated) return alert("Ha habido un problema con la creación del usuario")

      // alert("Usuario creado correctamente, proceda a logearse");
      navigate("/");
        
    }

    const handleDeleteUser =  async()=>{
      const response = confirm("Esta seguro que desea eliminar su cuenta?");
      console.log(response);
      const isUserDeleted = await fetchDeleteUser(userInfo?.id);
      if (isUserDeleted) {
        alert("Usuario eliminado correctamente");
        handleLogout();
        navigate("/");
        return
      }
    }
    
  return (
    <form>
      <p>{userInfo?.id}</p>
      <div className="wrapper">
        <div className="signUpFirstTitle">
          <h1> DATOS PERSONALES </h1>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
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
            <label htmlFor="exampleInputLastname" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
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
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ej. juan@perez.com"
              value={formInput[name]}
              name="email"
              onChange={myHandleInput}
            />
          </div>
        </div>
    
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="disabledSelect" className="form-label">
              Altura
            </label>
            <select  onChange={myHandleInput} name="height" className="form-select">
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
            <label htmlFor="disabledSelect" className="form-label">
              Peso
            </label>
            <select onChange={myHandleInput} className="form-select" name="weight">
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
            <label className="form-label">
              Tipo de bicicleta
            </label>
            <select onChange={myHandleInput} className="form-select" name="bikeType">
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