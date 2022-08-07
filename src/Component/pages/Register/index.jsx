import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="bg-[#fff] px-[1rem] py-[2rem] w-[30%] rounded">
            <form>
              <div className="text-center text-2xl font-bold mb-[1rem]">Register</div>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">First Name</label>
                <input type={"text"} className="w-[100%] px-[.5rem] py-[.4rem] border-black border-[.01rem] rounded focus:outline-none hover:bg-sky-50 focus:bg-sky-50" placeholder="First Name" />
              </div>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Last Name</label>
                <input type={"text"} placeholder='Last Name' className="w-[100%] px-[.5rem] py-[.4rem] border-black border-[.01rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none" />
              </div>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Email</label>
                <input type={"email"} placeholder='jay@gmail.com' className="w-[100%] px-[.5rem] py-[.4rem] border-black border-[.01rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none" />
              </div>
              <div className="mb-[1rem]">
                <label className="mb-[.2rem] block">Passsword</label>
                <input type={"password"} placeholder="Password" className="w-[100%] px-[.5rem] py-[.4rem] border-black border-[.01rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none" />
              </div>
              <div className="mb-[.5rem]">
                <button className="w-[100%] bg-black text-[#fff] text-base py-[.5rem] rounded outline-none">Sign Up</button>
              </div>
              <div className="w-[100%] text-center">
                <p>Already Have <Link to={"/login"} className='text-blue-600 underline'>Account</Link> ?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
