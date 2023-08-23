import React from "react";
import AlbumComponent from "./AlbumComponent";

const Main = () => {
  return (
    <div className=" overflow-scoll-y ms-3" style={{ height: "91%" }}>
      <h4 className="fw-bold">Recently played</h4>
      <div className="mt-4">
        <div className="row">
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
        </div>
      </div>
      <h4 className="fw-semibold my-3">Popular albums</h4>
      <div>
        <div className="row">
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
        </div>
      </div>
      <h4 className="fw-semibold my-3">Popular albums</h4>
      <div>
        <div className="row">
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
          <div className="col-2">
            <AlbumComponent
              imgURL={
                "https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a"
              }
              title={"Bekhayali"}
              artist="Sachet Tandon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
