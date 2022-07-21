import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <div className=" bg-[#fff] snap-y snap-mandatory relative">
        <NavBar />
        <Hero />
        {/* <Hero />
        <Hero /> */}



      </div>
    </>
  );
};

export default Home;
