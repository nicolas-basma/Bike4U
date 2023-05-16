const fetchLogin = async (data)=>{
    
    return fetch(process.env.REACT_APP_API + "login",
      {method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)})
      .then( async (res) => {
        if (res.status !== 200) {
          return res.json().then((response) => {
            const errorMessage = response?.msg;
            throw new Error(`${errorMessage}`);
          });
        }
        return res.json();
      })
      .then((data)=>{
        localStorage.setItem("userSessionToken", JSON.stringify(data["login_token"]));
        localStorage.setItem("loggedUser", JSON.stringify(data["Name"]));
        return true
      })
      .catch((err)=>{
        return err;
      })
}
export default fetchLogin;
