import {useEffect, useState} from "react";
import axios from "axios";

function FriendList(){
    const [friendList, setFriendList] = useState([]);
    useEffect(() => {
        axios.get(`api/accepted-friends`).then(res=>{
            setFriendList(res.data.friends);
        })
    }, []);
    console.log("friend",friendList)
    return(
        <div>
            {friendList.map((item)=>{
                return (
                    <div className="item">
                        <img src='/avatar.png' alt="avatar"/>
                        <div className="texts">
                            <span>{item.user.name}</span>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FriendList