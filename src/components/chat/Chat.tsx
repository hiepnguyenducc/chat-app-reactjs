import './Chat.css'
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
function Chat({ selectedUser }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      axios.get(`api/direct-messages/${selectedUser.id}`).then(res => {
        if (res.data.status === 200) {
          setMessages(res.data.data);
        }
      });
    }
  }, [selectedUser]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleEmoji = e => {
    setText(prevState => prevState + e.emoji);
    setOpen(false);
  };

  const handleSendMessage = () => {
    if (text.trim() && selectedUser) {
      axios.post('api/direct-messages', {
        receiver_id: selectedUser.id,
        content: text
      }).then(res => {
        if (res.data.status === 201) {
          setMessages([...messages, res.data.data]);
          setText("");
          endRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  return (
    <div className="chat">
      <div className={"top"}>
        <div className={"user"}>
          <img src={"./avatar.png"} alt="" />
          <div className={"texts"}>
            <span>{selectedUser?.name}</span>
            <p>{selectedUser ? "Chatting with " + selectedUser.name : "Select a user to chat"}</p>
          </div>
        </div>
        <div className={"icons"}>
          <img src={"./phone.png"} alt="phone" />
          <img src={"./video.png"} alt="video" />
          <img src={"./info.png"} alt="info" />
        </div>
      </div>
      <div className={"center"}>
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender_id === selectedUser.id ? "" : "own"}`}>
            <img src="./avatar.png" alt="avatar" />
            <div className="texts">
              <p>{msg.content}</p>
              <span>{formatDistanceToNow(new Date(msg.created_at))} ago</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>
      <div className={"bottom"}>
        <div className={"icons"}>
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message.."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="emoji" onClick={() => setOpen(prevState => !prevState)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
