import swal from 'sweetalert2';

const fetchGetUserInfo =(userID,userInfoSetter)=>{

    fetch(process.env.REACT_APP_API + "user"+userID,
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
    
        userInfoSetter(data);
        
    })
      .catch((err)=>console.log(err))

}


export default fetchGetUserInfo;
