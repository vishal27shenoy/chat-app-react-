import React, { useContext } from 'react'
import './groupcard.css';
import { AppContext } from '../../contextapi/Context';
const GroupCard = ({ item }) => {
    // console.log(item)
    const { setSelectedUser } = useContext(AppContext);
    let groupIcon = "https://cdn.icon-icons.com/icons2/3005/PNG/512/people_group_icon_188185.png";
    return (
        <div className='groupcardContainer' onClick={() => setSelectedUser(item)}>
            <div className='groupCardImgHolder'>
                <img src={item?.groupIcon?.length > 0 ? item?.groupIcon : groupIcon} alt="" className="groupcardImgHolder" />
            </div>
            <div className="groupnameandLastmessage">
                <p>{item?.groupName}</p>
                <p>{item?.lastMessage}hello</p>
            </div>
            <div className="grouplastmessageandnotificationContainer">
                <p>03:33 PM</p>
                <div className="badgeContainer">10</div>
            </div>
        </div>
    )
}

export default GroupCard;