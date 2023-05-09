const fetchGetPartByTypeTerrainAndSize =(terrain, part, size)=>{

    return fetch(process.env.REACT_APP_API + "/parts/"+terrain+"/"+part+"/"+size,
    {method: 'GET' })
    .then((res)=>{
        if (res.status != 200) {

          throw new Error(`Error`);
        }
        return res.json()
    })
    .then((data)=>{
    
        return data;
        
    })
      .catch((err)=>console.log(err))

}

export default fetchGetPartByTypeTerrainAndSize;