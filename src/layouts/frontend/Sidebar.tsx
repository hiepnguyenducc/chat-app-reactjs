import './sidebar.css';

function Sidebar({ setActiveComponent }) {
  return (
    <div className="sidebar">
      <div className="item">
        <button onClick={() => setActiveComponent('chat')}>Chat</button>
      </div>
      <div className="item">
        <button onClick={() => setActiveComponent('friend')}>Friend</button>
      </div>
      <div className="item">
        <button onClick={() => setActiveComponent('setting')}>Setting</button>
      </div>
      <div className="item">
        <button onClick={() => setActiveComponent('group')}>Group</button>
      </div>
    </div>
  );
}

export default Sidebar;
