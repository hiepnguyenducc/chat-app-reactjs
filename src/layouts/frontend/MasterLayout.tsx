import { useState } from 'react';
import './index.css';
import Sidebar from "./Sidebar";
import List from "../../components/list/List.tsx";
import Chat from "../../components/chat/Chat.tsx";
import Detail from "../../components/detail/Detail.tsx";
import Friend from "../../components/friend/friend.tsx"; // Thêm component Friend

function MasterLayout() {
  const [activeComponent, setActiveComponent] = useState('chat');
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="containerc">
      <Sidebar setActiveComponent={setActiveComponent} />

      {activeComponent === 'chat' && (
        <>
          <List onSelectUser={setSelectedUser}/>
          <Chat selectedUser={selectedUser}/>
          <Detail />
        </>
      )}
      {activeComponent === 'friend' && <Friend />}
      {activeComponent === 'setting' && <div>Setting Component Here</div>}
      {activeComponent === 'group' && <div>Group Component Here</div>}
    </div>
  );
}

export default MasterLayout;
