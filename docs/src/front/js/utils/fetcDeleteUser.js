import swal from 'sweetalert2';

const fetchDeleteUser = async (userID)=>{

    return await fetch(process.env.REACT_APP_API + "delete-user/"+userID,
                        {method: 'DELETE' })
                .then((res)=>{
                    if (res.status != 200) {
                        // swal.fire({
                        //     confirmButtonColor: '#ffd102',
                        //     icon: 'error',
                        //     title: 'Bike4U',
                        //     text: `Error: ${res?.data?.msg}`,

                        // })
                        throw new Error("Error en la petición");
                    }
                    return true;
                })
                .catch((err)=>console.log(err))

}

export default fetchDeleteUser;
