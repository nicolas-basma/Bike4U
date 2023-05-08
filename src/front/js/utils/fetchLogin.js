const fetchLogin = (data)=>{
    
    fetch(process.env.REACT_APP_API + "/login",
    {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
    .then((res)=>{
        const errorMessage = "Ha habido un error en el login"
        if (res.status != 200) {

          throw new Error(`Error: ${res?.data?.msg}`);
        }
        return res.json()})
      .then((data)=>{
    
        //console.log("fetchlogin", data);
        localStorage.setItem("userSessionToken", JSON.stringify(data["login_token"]));
        localStorage.setItem("loggedUser", JSON.stringify(data["Name"]));
      })
      .catch((err)=>console.log(err))
}

export default fetchLogin;