import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[2rem]">
        <div className="flex justify-center items-center h-[90vh]">

          <div className="bg-[#fff] p-[1rem] w-[30%] rounded-lg shadow-md">
            <form>
              <h1 className="text-center font-bold text-2xl mb-[1rem]">Sign In</h1>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem] text-base">Email ID</label>
                <input type={"email"} placeholder='Email ID' className="w-[100%] border-[.01rem] px-[.5rem] py-[.4rem] text-sm rounded hover:bg-sky-50 focus:bg-sky-50" />
              </div>
              <div className="mb-[1rem]">
                <label className="block mb-[.2rem] text-base">Password</label>
                <input type={"password"} placeholder='Password' className="w-[100%] border-[.01rem] px-[.5rem] py-[.4rem] text-sm rounded border-black hover:bg-sky-50 focus:bg-sky-50 focus:outline-none focus:border-black" />
              </div>
              <div className="mb-[1rem]">
                <button className="text-[#fff] text-base bg-black w-[100%] py-[.3rem] rounded outline-none">Sign in</button>
              </div>
              <div className="mb-[1rem] w-[100%] text-center">
                <p>Not have an <Link to={'/register'} className='text-blue-600 underline'>Account</Link> ?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
