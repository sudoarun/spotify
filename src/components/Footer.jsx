import React from "react";
import {
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { BiDevices, BiRepeat, BiShuffle } from "react-icons/bi";
import { BsFilePlay, BsSuitHeart } from "react-icons/bs";
import { PiPictureInPicture } from "react-icons/pi";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { HiOutlineQueueList, HiOutlineSpeakerWave } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ps-2">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
            alt=""
            width={50}
            height={50}
            className="rounded"
          />
          <div className="mx-3">
            <span className="fs-7 fw-semibold d-block mb-n1">Bekhayali</span>
            <span className="text-secondary fs-8">Sachet Tandon</span>
          </div>
          <div>
            <BsSuitHeart />
          </div>
          <div className="ms-3">
            <PiPictureInPicture />
          </div>
        </div>
        <div className="">
          <div>
            <BiShuffle />
            <AiFillStepBackward />
            <AiFillPlayCircle />
            <AiFillStepForward />
            <BiRepeat />
          </div>
          <div>
            <input type="range" />
          </div>
        </div>
        <div>
          <div>
            <BsFilePlay />
            <LiaMicrophoneAltSolid />
            <HiOutlineQueueList />
            <BiDevices />
            <HiOutlineSpeakerWave />
            <input type="range" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
