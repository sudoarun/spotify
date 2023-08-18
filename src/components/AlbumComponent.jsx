import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const AlbumComponent = ({ imgURL, title, artist }) => {
  return (
    <div className="albumCard rounded  p-3">
      <div className="position-relative">
        <img src={imgURL} className="w-100 rounded" alt="" />

        <BsFillPlayFill className="albumPlayBtn" />
      </div>
      <div>
        <span className="d-block mt-2">{title}</span>

        <span>{artist}</span>
      </div>
    </div>
  );
};

export default AlbumComponent;
