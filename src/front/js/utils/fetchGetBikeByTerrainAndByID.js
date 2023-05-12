const fetchGetBikeByTerrainAndByID =(terrain, ID, bikeSetter)=>{

  return fetch(process.env.REACT_APP_API + "/bikes/"+terrain+"/"+ID,
  {method: 'GET' })
  .then((res)=>{
      if (res.status != 200) {

        throw new Error(`Error`);
      }
      return res.json()
  })
  .then((data)=>{
    bikeSetter(data);
      
  })
    .catch((err)=>console.log(err))

}

export default fetchGetBikeByTerrainAndByID;