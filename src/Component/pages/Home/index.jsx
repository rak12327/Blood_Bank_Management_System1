import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Style from "./Home.module.css"
import ImageSlider from "./ImageSlider";

const Home = () => {
  return (
    <>
      <div className=" bg-[#fff]">
        <NavBar />
        <div className={Style.section}>
          <Hero />
          <ImageSlider />
        </div>

      </div>
    </>
  );
};

export default Home;
