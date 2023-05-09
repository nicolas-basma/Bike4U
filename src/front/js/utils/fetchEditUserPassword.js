const fetchEditUserPassword =(userID,data)=>{
    
    return fetch(process.env.REACT_APP_API  + "/edit-user-password/" + userID,
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
      return data["msg"];
    })
    .catch((err)=>{
      console.log(err)
      return false;
    })
}

export default fetchEditUserPassword;