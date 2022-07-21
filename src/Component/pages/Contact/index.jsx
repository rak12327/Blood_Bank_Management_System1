import React from "react";
import { useState } from "react";
import NavBar from "../Home/NavBar";

const Contact = () => {

  const [value, setValue] = useState({ name: "", phoneNo: "" })
  const [touch, setTouch] = useState(false)


  return (
    <div className="bg-[crimson] h-[100vh]">
      <NavBar />
      <div className="max-w-[1300px] mx-auto">

        {/* Heading  */}
        <div className="text-center text-white">
          <h1 className=" font-bold text-4xl pt-[1rem]">Contact Us</h1>
          <h3 className="text-xl">How Can We Help You?</h3>
          <span>{value.name}</span>
          <span>{touch}</span>
        </div>


        {/* image container */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-[1rem] lg:px-[2rem] py-[1rem] lg:py-[2rem] gap-10">
          <div className="w-[100%] lg:w-[40%]">
            <img src="/assets/contactUs.jpg" alt="..." className="w-[100%] rounded-xl" />
          </div>
          <div className="w-[100%] lg:w-[50%] px-[1rem] py-[1rem] bg-[#fff] rounded-xl shadow-md">
            <form>
              <div className="mb-2">
                <label className="block mb-1">Full Name</label>
                <input
                  placeholder="Your Full Name"
                  onChange={(e) => { setValue({ name: e.target.value }) }}
                  onBlur={() => { setTouch(true) }}
                  value={value.name}
                  type={"text"}
                  className="block w-full py-1 px-2 leading-[.5rem] text-[1rem] rounded hover:bg-sky-100 focus:bg-sky-100 focus:border-sky-100" />
                {value.name.trim() !== "" && touch ? <p>Please enter your Full Name</p> : <p>everything must alright</p>}
              </div>
              <div className="mb-2">
                <label className="block mb-1">Phone Number</label>
                <input placeholder="Your Full Name" type={"text"} className="block w-full py-1 px-2 leading-[.5rem] text-[1rem] rounded hover:bg-sky-100 focus:bg-sky-100 focus:border-sky-100" />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Email ID</label>
                <input placeholder="Your Full Name" type={"email"} className="block w-full py-1 px-2 leading-[.5rem] text-[1rem] rounded hover:bg-sky-100 focus:bg-sky-100 focus:border-sky-100 outline-none" />
              </div>
              <div className="mb-2">
                <div className="block mb-1">Your Message</div>
                <textarea placeholder="Leave your comment..." typeof="" className="block w-full px-2 h-[5rem] leading-[.5rem] text-[1rem]  rounded hover:bg-sky-100 focus:bg-sky-100 focus:border-sky-100 outline-none" />
              </div>
              <div className="text-right">
                <button className="text-white py-[.2rem] px-[1rem] rounded-lg outline-none bg-gray-900 hover:bg-gray-800">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
