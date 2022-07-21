import React from "react";
import NavBar from "../Home/NavBar";

const Request = () => {
  return (
    <div className="">
      <NavBar />
      <div className="max-w-[1300px] mx-auto min-h-[90vh] px-[1rem] lg:px-[2rem] bg-green-500 mt-[3.5rem]">
        <div className="text-center">
          <h1 className="text-[crimson] text-4xl mt-[1rem] font-bold">Check Blood Stock</h1>
        </div>

        <div className="flex justify-center items-center float-left w-[26%] ">
          <div className="bg-[crimson] px-[.5rem] py-[.8rem] flex items-center justify-center gap-2 mt-[1%] rounded-xl w-[100%] sm:w-[48%] lg:w-[85%] xl:w-[85%] hover:">
            <div className="w-[6rem]">
              <img src="/assets/b1.png" alt="..." className="w-[100%]" />
            </div>
            <div className="w-[60%] bg-[#fff] rounded-xl text-center px-[.25rem]">
              <div className="border-b-2 border-[crimson]">
                <h1 className="text-[1rem] font-semibold">The A-listers</h1>
              </div>

              <div className="pt-[.05rem] text-left my-[.8rem] px-[0rem]">
                <div className="">
                  <label className="block">Blood Component:</label>
                  <select name="option" id="option" className="px-[.25rem] pb-[.1rem] focus:outline-none border-b border-0 focus:rounded focus:border-b focus:border-0 active:bottom-0 w-[100%] ">
                    <option selected>Select</option>
                  </select>
                </div>
                <div className="flex items-center text-center mt-[.5rem]">
                  <label className="">Unit</label>
                  <input disabled className="ml-[.5rem] border-b border-0 border-black w-[50%]" value={0} />
                </div>
              </div>

              <div>
                <button className="bg-[crimson] text-[#fff] rounded-md px-[1rem] py-[.25rem] mb-[.5rem]">Request Blood</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
