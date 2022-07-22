import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Style from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className=" bg-[#fff] h-[100vh]">
        <NavBar />
        <div className={Style.section}>
          <Hero />
        </div>

      </div>
    </>
  );
};

export default Home;
