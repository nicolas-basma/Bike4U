const fetchGetPartByTypeTerrainAndSize = async (terrain, size)=>{

    return fetch(process.env.REACT_APP_API + "parts/"+terrain+"/"+size,
    {method: 'GET' })
    .then((res)=>{
        if (res.status != 200) {
          swal.fire({
            confirmButtonColor: '#ffd102',
            icon: 'error',
            title: 'Bike4U',
            text: `Error: ${res?.data?.msg}`,
          })
        }
        return res.json()
    })
    .then((data)=>{
    
        return data;
        
    })
      .catch((err)=>console.log(err))

}

export default fetchGetPartByTypeTerrainAndSize;