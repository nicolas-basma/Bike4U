import swal from 'sweetalert2';

const fetchGetBikes =(terrain,bikeSetter)=>{
    fetch(process.env.REACT_APP_API + "bikes/"+terrain,
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
        bikeSetter(data);
    })
      .catch((err)=>console.log(err))
}

export default fetchGetBikes;