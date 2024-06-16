import './UserInfo.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function UserInfo(){
  const token = localStorage.getItem('auth_token');
  const name = localStorage.getItem('auth_name');
  const navigate = useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, []);
  console.log("token name", name)
  return (
    <div className="UserInfo">
      {token ? (
        <>
          <div className="user">
            <img src="./avatar.png" alt=""/>
            <h2>{name}</h2>
          </div>
        </>
      ):null
      }
      <div className="icons">
        <img src="./more.png" alt=""/>
        <img src="./video.png" alt=""/>
        <img src="./edit.png" alt=""/>
      </div>
    </div>
  )
}

export default UserInfo
