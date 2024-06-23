import './ChatList.css';
import { useEffect, useState } from "react";
import AddUser from "./addUser/addUser.tsx";
import axios from "axios";

function ChatList({ onSelectUser }) {
  const [addMode, setAddMode] = useState(false);
  const [friends, setFriends] = useState([]);
  const [latestMessages, setLatestMessages] = useState({});

  useEffect(() => {
    axios.get(`api/friends`).then(res => {
      if (res.data.status === 200) {
        setFriends(res.data.friends);

        // Lấy tin nhắn mới nhất cho từng người bạn
        res.data.friends.forEach(friend => {
          axios.get(`api/direct-messages/latest/${friend.id}`).then(messageRes => {
            if (messageRes.data.status === 200) {
              setLatestMessages(prevState => ({
                ...prevState,
                [friend.id]: messageRes.data.message
              }));
            }
          });
        });
      }
    });
  }, []);

  return (
      <div className="ChatList">
        <div className="search">
          <div className="searchBar">
            <img src={"/search.png"} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
               onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
        {friends.map((item) => {
          const latestMessage = latestMessages[item.id];
          return (
              <div className={"item"} key={item.id} onClick={() => onSelectUser(item)}>
                <img src={"./avatar.png"} alt="" />
                <div className={"texts"}>
                  <span>{item.name}</span>
                  <p>{latestMessage ? latestMessage.content : "Hello"}</p>
                </div>
              </div>
          )
        })}
        {addMode && <AddUser />}
      </div>
  );
}

export default ChatList;
