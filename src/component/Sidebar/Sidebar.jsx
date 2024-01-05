import React, { useContext, useState, useEffect } from "react";
import "./Sidebar.css";
import logo from "../../assets/images/profile.jpeg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import UserCard from "../usercard/UserCard";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { AppContext } from "../../contextapi/Context";
import { IoSearchOutline } from "react-icons/io5";
import { getContact, getGroup } from "../../api/userApi";
import { useQuery } from "react-query";
import GroupCard from "../groupcard/GroupCard";
import Badge from '@mui/material/Badge';

const Sidebar = () => {
  const { changeTheme, setSearchModal, auth, userContacts, userGroups, userNotification } = useContext(AppContext);
  const [isDark, setIsDark] = useState(true);
  // console.log(userContacts, userGroups)
  return (
    <div className="sidebarContainer">
      <div className="sidebarInfoCOntainer">
        <div className="imageContainer">
          <img src={auth?.profileUrl} alt="" className="imgHolder" />
        </div>
        <div className="nameemailContainer">
          <p>{auth?.userName}</p>
          <p>{auth?.email}</p>
        </div>
        <div className="actionBtnContainer">
          <IoSearchOutline fontSize={"2rem"} color="gray" onClick={() => setSearchModal(true)} />
          {isDark ? <HiOutlineMoon fontSize={"2rem"} color="gray" onClick={() => { changeTheme(); setIsDark(false) }} /> : <HiOutlineSun fontSize={"2rem"} color="gray" onClick={() => { changeTheme(); setIsDark(true) }} />}
          <div className="sidebarBarHolder" data-count={userNotification?.length}>
            <IoIosNotificationsOutline fontSize={"2rem"} color="gray" />
          </div>
        </div>
      </div>
      <div className="userContactContainer">
        <div className="searchContainer">
          <input
            type="search"
            name=""
            id=""
            className="inputHolder"
            placeholder="search"
          />
          <IoMdSearch fontSize={"1.5rem"} color="gray" />
        </div>
        <div className="allUserDisplay">
          {
            userContacts?.map((item) => {
              { console.log(item) }
              return <UserCard props={item} />
            })
          }
          {
            userGroups?.map((item) => {
              return <GroupCard item={item} />
            })
          }
          {/* <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
