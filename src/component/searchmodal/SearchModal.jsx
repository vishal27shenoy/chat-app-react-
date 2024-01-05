import React, { useState, useContext } from "react";
import "./searchmodal.css";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../../contextapi/Context";
import { IoMdSearch } from "react-icons/io";
const SearchModal = () => {
  const { searchModal, setSearchModal } = useContext(AppContext);
  return (
    <div className="searchmodalContainer">
      <div className="inputandCloseContainer">
        <div className="searchinputHolder">
          <input type="text" className="" placeholder="Search user" />
          <IoMdSearch fontSize={"2rem"} />
        </div>
        <span className="searchmodalCloseIconContainer">
          <IoIosClose fontSize={"2.5rem"} onClick={() => setSearchModal(false)} className="searchModelcloseIcon" />
        </span>
      </div>
      <div className="allUserContainer">
        <div className="allUserHolder"></div>
      </div>
    </div>
  );
};

export default SearchModal;
