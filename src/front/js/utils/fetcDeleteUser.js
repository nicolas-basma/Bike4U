const fetchDeleteUser = async (userID)=>{

    return await fetch(process.env.REACT_APP_API + "/deleteuser/"+userID,
                        {method: 'DELETE' })
                .then((res)=>{
                    if (res.status != 200) {
                        throw new Error(`Error: ${res?.data?.msg}`);
                    }
                    return true;
                })
                .catch((err)=>console.log(err))

}

export default fetchDeleteUser;