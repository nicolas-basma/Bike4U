const fetchGetBikes =(terrain,bikeSetter)=>{
    fetch(process.env.REACT_APP_API + "bikes/"+terrain,
    {method: 'GET' })
    .then((res)=>{
        if (res.status != 200) {
          throw new Error(`Error: ${res?.data?.msg}`);
        }
        return res.json()
    })
    .then((data)=>{
        bikeSetter(data);
    })
      .catch((err)=>console.log(err))
}

export default fetchGetBikes;