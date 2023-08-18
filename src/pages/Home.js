import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <>
      <div className="d-flex">
        <div className="w-5">
          <SideNav />
        </div>
        <div className="w-95 ">
          <div className="p-2 HomeSection">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
