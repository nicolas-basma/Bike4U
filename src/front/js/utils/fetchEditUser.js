const fetchEditUser =(userID,data)=>{
    
    return fetch(process.env.REACT_APP_API  + "edit-user/" + userID,
    {method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
    .then((res)=>{
      if (res.status != 200) {
        throw new Error(`Error: ${res?.msg}`);
      } 
      //console.log(res);
      return res.json();
    })
    .then((data)=>{
      localStorage.setItem("userSessionToken", JSON.stringify(data["login_token"]));
      localStorage.setItem("loggedUser", JSON.stringify(data["Name"]));
      return data["User_info"];
    })
    .catch((err)=>{
      console.log(err)
      return false;
    })
}

export default fetchEditUser;
