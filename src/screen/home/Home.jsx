import React, { useEffect, useContext } from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import Chatbox from '../../component/chatbox/Chatbox'
import { getContact, getGroup, getNotification } from "../../api/userApi";
import { AppContext } from "../../contextapi/Context";
import { useQuery } from "react-query";
import SearchModal from '../../component/searchmodal/SearchModal';
const Home = () => {
    const { setUserContacts, setUserGroup, auth, selectedUser, searchModal, setUserNotification } = useContext(AppContext);
    const userQuery = useQuery({ queryKey: ['contacts'], queryFn: () => getContact(auth?._id, auth?.accessToken) });
    setUserContacts(userQuery?.data?.data?.data?.userContacts);
    const groupQuery = useQuery({ queryKey: ['groups'], queryFn: () => getGroup(auth?._id, auth?.accessToken) });
    setUserGroup(groupQuery?.data?.data?.data?.userGroups);
    const notificationQuery = useQuery({ queryKey: ['notification'], queryFn: () => getNotification(auth?._id, auth?.accessToken) });
    setUserNotification(notificationQuery?.data?.data?.data?.userRequests)
    console.log(auth)
    return (
        <div className='appContainer'>
            {searchModal && <SearchModal />}
            <Sidebar />

            {selectedUser !== false && < Chatbox />}
        </div>
    )
}

export default Home