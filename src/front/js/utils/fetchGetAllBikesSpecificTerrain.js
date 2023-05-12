const fetchGetAllBikesSpecificTerrain = async(terrain, bikeSetter)=>{
  return fetch(process.env.REACT_APP_API + "bikes/"+terrain,
  {method: 'GET' })
  .then((res)=>{
      if (res.status != 200) {

        throw new Error(`Error`);
      }
      return res.json()
  })
  .then((data)=>{
  
      // bikeSetter(data);
      return data;
      
  })
    .catch((err)=>console.log(err))


}

export default fetchGetAllBikesSpecificTerrain;
