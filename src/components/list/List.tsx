import './List.css'
import UserInfo from "./userInfo/UserInfo.tsx";
import ChatList from "./chatList/ChatList.tsx";
function List({onSelectUser }){
  return(
    <div className="list">
    <UserInfo/>
      <ChatList onSelectUser={onSelectUser}/>

    </div>

  )
}export default List
