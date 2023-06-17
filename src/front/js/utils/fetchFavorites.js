import swal from 'sweetalert2';

const getFavorites = async (userID) => {
    return fetch(process.env.REACT_APP_API  + "user/" + userID + '/favorites',
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
    }
    )
    .then((data)=>{
        return data;
    }
    )
        .catch((err)=>console.log(err))
}

 const addFavoriteBike = async (userID, bikeID) => {
    return fetch(process.env.REACT_APP_API  + "user/" + userID + '/add-favorite-bike/' + bikeID,
    {method: 'POST' })
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
    }
    )
    .then((data)=>{
        return data;
    }
    )
        .catch((err)=>console.log(err))
}

const addFavoritePart = async (userID, partID) => {
    return fetch(process.env.REACT_APP_API  + "user/" + userID + '/add-favorite-part/' + partID,
    {method: 'POST' })
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
    }
    )
        .catch((err)=>console.log(err))
}

const deleteFavoriteBike = async (userID,bikeID) => {
    return fetch(process.env.REACT_APP_API  + "user/" + userID + '/delete-favorite-bike/' + bikeID,
    {method: 'DELETE' })
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
    }
    )
    .then((data)=>{
        return data;
    }
    )
        .catch((err)=>console.log(err))
}

const deleteFavoritePart = async (userID,partID) => {
    return fetch(process.env.REACT_APP_API  + "user/" + userID + '/delete-favorite-part/' + partID,
    {method: 'DELETE' })
    .then((res)=>{
        if (res.status != 200) {
          // swal.fire({
          //   confirmButtonColor: '#ffd102',
          //   icon: 'error',
          //   title: 'Bike4U',
          //   text: `Error: ${res?.data?.msg}`,
          // })
          throw new Error("Error en la petición");
        }
        return res.json()
    }
    )
    .then((data)=>{
        return data;
    }
    )
        .catch((err)=>console.log(err))
}

export { addFavoriteBike, getFavorites, addFavoritePart, deleteFavoriteBike, deleteFavoritePart };

