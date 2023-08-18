import React from "react";
import {
  BsArrowDownCircle,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
const Header = () => {
  return (
    <div className="d-flex justify-content-between fw-semibold py-3 align-items-center">
      <div>
        <span className="me-3">
          <BsArrowLeftCircleFill className="pointer" />
        </span>
        <span>
          <BsArrowRightCircleFill className="pointer" />
        </span>
      </div>
      <div className="align-items-center">
        <span className="bg-white text-black py-1 px-3 rounded-pill me-3 pointer">
          Explore Premium
        </span>
        <span className="pointer">
          <span className="fs-6 me-2 ">
            <BsArrowDownCircle />
          </span>
          Install App
        </span>
        <span className="ms-3">
          <img
            src="https://i.scdn.co/image/ab67757000003b82137c81b8ca0d3fd622b39af8"
            alt=""
            width={24}
            height={24}
            className="rounded-circle pointer"
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
