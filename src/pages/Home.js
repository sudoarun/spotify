import React from "react";
import Header from "../components/Header";
import AlbumComponent from "../components/AlbumComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <h4 className="fw-bold">Recently played</h4>
      <div className="mt-4">
        <div className="row gap-4">
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

export default Home;
