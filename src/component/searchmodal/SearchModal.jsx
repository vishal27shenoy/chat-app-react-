import React, { useState, useContext } from "react";
import "./searchmodal.css";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../../contextapi/Context";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
const SearchModal = () => {
  const { searchModal, setSearchModal, auth } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);


  const handleSearch = async (e) => {
    if (e.code !== "Enter") return;
    try {
      axios.defaults.headers.Authorization = `Bearer ${auth.accessToken}`;
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user?search=${search}`);
      console.log(response);
      setData(response?.data?.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="searchmodalContainer">
      <div className="inputandCloseContainer">
        <div className="searchinputHolder">
          <input type="text" className="" placeholder="Search user" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} />
          <IoMdSearch fontSize={"2rem"} />
        </div>
        <span className="searchmodalCloseIconContainer">
          <IoIosClose fontSize={"2.5rem"} onClick={() => setSearchModal(false)} className="searchModelcloseIcon" />
        </span>
      </div>
      <div className="allUserContainer">
        <div className="allUserHolder">
          {
            data && data?.map((item) => {
              return <div className="searchUserCardContainer">
                <div className="searchImgHolder">
                  <img src={item?.profileUrl} alt="" className="searchImg" />
                </div>
                <div className="userInfoContainer">
                  <p>{item?.userName}</p>
                  <p>{item?.email}</p>
                </div>
                <div className="userRequestBtn">
                  click
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
