import './friend.css';
import FriendList from "./friendList";
import FriendRequest from "./friendRequest";
import { useState } from "react";

function Friend() {
    const [activeComponent, setActiveComponent] = useState('friendList');

    const handleClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="friend">
            <div className="friends-list">
                <button
                    style={{ height: '50px' }}
                    onClick={() => handleClick('friendList')}
                >
                    Friends List
                </button>
                <br />
                <button
                    style={{ height: '50px' }}
                    onClick={() => handleClick('friendRequest')}
                >
                    Friends Request
                </button>
            </div>

            <div className="other-section">
                {activeComponent === 'friendList' && <FriendList />}
                {activeComponent === 'friendRequest' && <FriendRequest />}
            </div>
        </div>
    );
}

export default Friend;
