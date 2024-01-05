import React, { useContext } from 'react'
import './Chatbox.css';
import logo from '../../assets/images/profile.jpeg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { AppContext } from "../../contextapi/Context";
import SearchModal from "../searchmodal/SearchModal";
import { useQuery } from "react-query";
import { getMessage } from '../../api/messageApi';
const Chatbox = () => {
    const { searchModal, selectedUser, auth } = useContext(AppContext);
    const MessageQuery = useQuery({ queryKey: [`${selectedUser._id}`], queryFn: () => getMessage(auth?._id, selectedUser._id, auth?.accessToken) });
    return (
        <div className='chatboxContainer'>
            {searchModal && <SearchModal />}
            <div className="oppositeuserContainer">
                <div className="oppositeuserinfoContainer">
                    <div className="oppositeuserimgcontainer">
                        <img src={selectedUser?.profileUrl || selectedUser?.groupIcon} alt="" className='oppositeuserimgHolder' />
                    </div>
                    <div className="oppositeusernamecontainer">
                        <p>{selectedUser?.userName || selectedUser?.groupName}</p>
                        <p>{selectedUser?.email}</p>
                    </div>
                    <div className="phoneandcameraicon">
                        <div className="phoneIconHolder">
                            <FaPhoneAlt fontSize={"1.4rem"} color='#2680eb' />
                        </div>
                        <div className="cameraiconholder">
                            <IoIosVideocam fontSize={"1.4rem"} color='#2680eb' />
                        </div>
                    </div>
                </div>

            </div>
            <div className="bothusersmessageContainer">
                {
                    MessageQuery?.data?.data?.messages?.map((item) => {
                        return <div className={`${item?.senderId == auth._id ? "alignLeft" : "alignRight"}`}>{item?.message}</div>
                    })
                }
            </div>
            <div className="inputmessgaeContainer">
                <input type="text" className='messageInput' placeholder='type a message...' />
                <div className='sendBtnholder'>
                    <IoMdSend fontSize={"1.5rem"} color='white' />
                </div>
            </div>
        </div>
    )
}

export default Chatbox