const fetchGetPartByTypeTerrainAndSize = async (terrain, size)=>{

    return fetch(process.env.REACT_APP_API + "parts/"+terrain+"/"+size,
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