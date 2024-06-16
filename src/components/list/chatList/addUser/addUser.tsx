import './addUser.css'
import {useState} from "react";
import axios, {name} from "axios";
import Swal from "sweetalert2";
function AddUser(){
  const [user,setUser] = useState(null);

  const [phoneInput, setPhoneInput] = useState({
    phone:'',
  })
  const handleInput = (e)=>{
    setPhoneInput({...phoneInput,[e.target.name]:e.target.value})
  }
  const submitPhone = (e)=>{
    e.preventDefault();
    const data = {
      phone:phoneInput.phone,
    }
    axios.post(`api/findPhone`,data).then(res=>{
      if(res.data.status===200){
        setUser(res.data.user)
        console.log(res.data.user)
      }
    })
  }
  const submitAddFriend = (e) => {
    e.preventDefault();
    if (user) {
      const data = {
        friend_id: user.id,
      };
      axios.post(`api/add-friends`, data).then(res => {
        if (res.data.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }).catch(error => {
        console.error("There was an error adding the friend!", error);
      });
    }
  };
  return(
    <div className="adduser">
      <form onSubmit={submitPhone}>
          <input type="text" placeholder="Username" name="phone" onChange={handleInput}/>
          <button type="submit">Search</button>
      </form>
      { user && (

        <div className="user">
          <div className="detail">
            <img src="./avatar.png" alt=""/>
            <span>{user.name}</span>
          </div>
          <button onClick={submitAddFriend}>Add User</button>
        </div>


      )

      }

    </div>
  )
}

export default AddUser
