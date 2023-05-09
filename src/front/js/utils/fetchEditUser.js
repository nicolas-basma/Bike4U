const fetchEditUser =(userID,data)=>{
    
    return fetch(process.env.REACT_APP_API  + "/edit-user/" + userID,
    {method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
    .then((res)=>{
      if (res.status != 200) {
        throw new Error(`Error: ${res?.data?.msg}`);
      } 
      //console.log(res);
      return res.json();
    })
    .catch((err)=>{
      console.log(err)
      return false;
    })
}

export default fetchEditUser;