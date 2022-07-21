import React from "react";
import NavBar from "../Home/NavBar";

const Donor = () => {
  return (
    <div className="bg-[crimson]">
      <NavBar />

      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[2rem] min-h-[calc(100vh-54px)]">
        <div className="px-[1rem] py-[2rem] max-w-[1000px] mx-auto bg-[#fff] rounded-xl flex flex-col md:flex-row items-center justify-around">
          <div className="w-[100%]  md:w-[30%]">
            <img src="/assets/donate.jpg" alt="..." className=" w-[50rem] md:w-full h-[20rem] md:h-full rounded-xl object-contain" />
          </div>
          <div className="px-[.5rem] w-full md:w-[65%]">
            <h1 className="font-bold text-[1.5rem]">Why Should Donate The Blood ?</h1>
            <p className="font-normal text-[1rem] leading-4 mt-2">
              Blood donation is a community responsibility. While you're reading this, a local patient needs blood.
            </p>

            <ul className="ml-[1rem] my-[.5rem] text-[.8rem]">
              <li>
                <i>
                  Blood is needed every two seconds.
                </i>
              </li>
              <li>
                <i>
                  About one in seven people entering a hospital needs blood.
                </i>
              </li>
              <li>
                <i>
                  Blood is always needed for treatment of accident victims, cancer patients, hemophiliacs and surgery patients.
                </i>
              </li>
              <li>
                <i>
                  Blood cannot be manufactured.
                </i>
              </li>
              <li>
                <i>
                  Only 37 percent of our country's population is eligible to give blood, and less than 10 percent of those who can donate actually do donate annually.
                </i>
              </li>
            </ul>
            <p className="font-normal text-[1rem] leading-[1.25rem]">
              What if everyone eligible to donate became complacent and decided they didn't need to donate because someone else would?
              <br />
              What if there wasn't enough donated blood available when you, a loved one - anyone - needed it?
              <br />
              Our blood supply comes from caring donors like you. It takes about one hour of your time. When you give blood, it gives someone another smile, another hug, another chance. It is the gift of life.
            </p>
            <div className="text-center mt-4 md:text-right">
              <button className="bg-[crimson] px-[1.25rem] py-[.5rem] text-white rounded-xl">Be a Donor</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;
