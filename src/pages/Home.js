import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

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
      <div className="fixed-bottom bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Home;
