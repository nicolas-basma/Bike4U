const fetchRestorePassword = (userEmail)=>{

    return fetch(process.env.REACT_APP_API + "recover-user-password/"+userEmail,
                        {method: 'GET' })
                .then((res)=>{
                    if (res.status != 200) {
                        swal.fire({
                            confirmButtonColor: '#ffd102',
                            icon: 'error',
                            title: 'Bike4U',
                            text: `Error: ${res?.msg}`,
                        })
                    }
                    return true;
                })
                .catch((err)=>console.log(err))

}

export default fetchRestorePassword;
