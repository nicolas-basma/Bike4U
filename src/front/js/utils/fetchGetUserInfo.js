const fetchGetUserInfo =(userID,userInfoSetter)=>{

    fetch(process.env.REACT_APP_API + "/user"+userID,
    {method: 'GET' })
    .then((res)=>{
        
        if (res.status != 200) {

          throw new Error(`Error: ${res?.data?.msg}`);
        }
        return res.json()
    })
    .then((data)=>{
    
        userInfoSetter(data);
        
    })
      .catch((err)=>console.log(err))

}


export default fetchGetUserInfo;