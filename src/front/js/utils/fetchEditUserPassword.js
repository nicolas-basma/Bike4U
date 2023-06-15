import swal from "sweetalert2";

const fetchEditUserPassword =(userID,data)=>{
    
    return fetch(process.env.REACT_APP_API  + "edit-user-password/" + userID,
    {method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})
    .then((res)=>{
      if (res.status != 200) {
        swal.fire({
          confirmButtonColor: '#ffd102',
          icon: 'error',
          title: 'Bike4U',
          text: `Error: ${res?.msg}`,

        })
      } 
      return res.json();
    })
    .then((data)=>{
      //console.log(data.msg);
      return data.msg;
    })
    .catch((err)=>{
      console.log(err)
      return false;
    })
}

export default fetchEditUserPassword;
