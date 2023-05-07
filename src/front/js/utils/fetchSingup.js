const fetchSingup = (data)=>{

    fetch(process.env.REACT_APP_API  + "/signup",
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
        .then((res)=>{
          if (res.status != 200) {
            throw new Error(`Error: ${res?.data?.msg}`);
          } 
          console.log(res);
        })
        .catch((err)=>console.log(err))

}

export default fetchSingup