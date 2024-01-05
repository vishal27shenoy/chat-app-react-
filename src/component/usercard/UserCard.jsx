import React, { useContext } from "react";
import "./usercard.css";
import logo from "../../assets/images/profile.jpeg";
import { AppContext } from "../../contextapi/Context";
const UserCard = ({ props }) => {
  const { setSelectedUser } = useContext(AppContext);

  return (
    <div className="usercardContainer" onClick={() => setSelectedUser(props)}>
      <div className="usercardImgContainer">
        <img src={props?.profileUrl} alt="" className="usercardImgHolder" />
      </div>
      <div className="usernameandLastmessage">
        <p>{props?.userName}</p>
        <p>{props?.email}</p>
      </div>
      <div className="lastmessageandnotificationContainer">
        <p>03:33 PM</p>
        <div className="badgeContainer">10</div>
      </div>
    </div>
  );
};

export default UserCard;
