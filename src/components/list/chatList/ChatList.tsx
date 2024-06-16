import './ChatList.css'
import {useEffect, useState} from "react";
import AddUser from "./addUser/addUser.tsx";
import axios from "axios";
function ChatList({onSelectUser}){
  const [addMode, setAddMode] = useState(false)
  const [friend,setFriend]= useState([])
  useEffect(() => {
    axios.get(`api/friends`).then(res=>{
      if(res.data.status===200){
        setFriend(res.data.friends);
        console.log(res.data.friends)
      }
    })
  }, []);
  return(
    <div className="ChatList">
     <div className="search">
       <div className="searchBar">
         <img src={"/search.png"} alt=""/>
         <input type="text" placeholder="Search"/>
       </div>
       <img src={addMode? "./minus.png":"./plus.png"} alt="" className="add"
       onClick={()=>setAddMode((prev)=>!prev)}
       />
     </div>
      {
        friend.map((item)=>{
          return (
            <div className={"item"} key={item.id} onClick={()=> onSelectUser(item)}>
              <img src={"./avatar.png"} alt={""}/>
              <div className={"texts"}>
                <span>{item.name}</span>
                <p>Hello</p>
              </div>
            </div>
          )
        })
      }

      {addMode &&
        <AddUser/>
      }
    </div>
  )
}

export default ChatList
