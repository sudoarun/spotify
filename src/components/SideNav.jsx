import React from "react";
import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
const SideNav = () => {
  return (
    <div className="sideNavMain">
      <div className="d-flex flex-column align-items-center sideNav">
        <span className="p-2 pt-3 ">
          <BiHomeAlt2 className="fs-4" />
        </span>
        <span className="p-2 pb-3">
          <BiSearch className="fs-4" />
        </span>
      </div>
      <div className="d-flex flex-column align-items-center sideNav">
        <span className="p-2 pt-3">
          <VscLibrary className="fs-4" />
        </span>
        <span className="p-2 pb-3">
          <AiFillHeart className="fs-4" />
        </span>
      </div>
    </div>
  );
};

export default SideNav;
