import swal from "sweetalert2";

const fetchLogin = async (data)=>{
    
    return fetch(process.env.REACT_APP_API + "login",
      {method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)})
      .then( async (res) => {
        if (res.status !== 200) {
          //return res.json().then((response) => {
            //const errorMessage = response?.msg;
            // swal.fire({
            //   confirmButtonColor: '#ffd102',
            //   icon: 'error',
            //   title: 'Bike4U',
            //   text: errorMessage,
            // })
            //throw new Error(errorMessage);
          //});
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data)=>{
        localStorage.setItem("userSessionToken", JSON.stringify(data["login_token"]));
        localStorage.setItem("loggedUser", JSON.stringify(data["Name"]));
        return true
      })
      .catch((err)=>{
        return (
          swal.fire({
            confirmButtonColor: '#ffd102',
            icon: 'error',
            title: 'Bike4U',
            text: 'Usuario o contraseña incorrectos',
            
          })
        )
      })
}
export default fetchLogin;
