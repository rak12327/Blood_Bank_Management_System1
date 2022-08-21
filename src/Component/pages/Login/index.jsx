import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [signInValue, setSignInValue] = useState({ email: "", password: "" })

  const [touch, setTouch] = useState({ emailTouch: false, passwordTouch: false })

  const validCSS = "w-[100%] border-[.01rem] px-[.5rem] py-[.4rem] text-sm rounded hover:bg-sky-50 focus:bg-sky-50"
  const inValidCSS = "w-[100%] border-[.01rem] px-[.5rem] py-[.4rem] text-sm rounded bg-red-50 border-[red] focus:bg-sky-50"


  const signInHandler = (e) => {
    e.preventDefault()

    if (signInValue.email?.length >= 4 && signInValue.password?.length >= 4) {

      console.log(signInValue)

      setSignInValue({ email: "", password: "" })
      setTouch({ emailTouch: false, passwordTouch: false })
    } else {
      setTouch({ emailTouch: true, passwordTouch: true })
      alert("Please enter your email and password")
    }
  }
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[2rem]">
        <div className="flex justify-center items-center h-[90vh]">

          <div className="bg-[#fff] p-[1rem] w-[30%] rounded-lg shadow-md">
            <form>
              <h1 className="text-center font-bold text-2xl mb-[1rem]">Sign In</h1>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem] text-base">Email ID</label>
                <input
                  type={"email"}
                  placeholder='Email ID'
                  value={signInValue.email}
                  name={"email"}
                  onChange={(e) => setSignInValue(value => ({ ...value, [e.target.name]: e.target.value }))}
                  onBlur={() => setTouch(e => ({ ...e, emailTouch: true }))}
                  className={touch.emailTouch && signInValue.email?.trim() === "" ? inValidCSS : validCSS}
                />
                {touch.emailTouch && signInValue.email?.trim() === "" ? <p className="text-[red] text-sm">Please type your email id</p> : null}
              </div>
              <div className="mb-[1rem]">
                <label className="block mb-[.2rem] text-base">Password</label>
                <input
                  type={"password"}
                  placeholder='Password'
                  value={signInValue.password}
                  name={"password"}
                  onChange={(e) => setSignInValue(value => ({ ...value, [e.target.name]: e.target.value }))}
                  onBlur={() => setTouch(e => ({ ...e, passwordTouch: true }))}
                  className={touch.passwordTouch && signInValue.password?.trim() === "" ? inValidCSS : validCSS}
                />
                {touch.passwordTouch && signInValue.password?.trim() === "" ? <p className="text-[red] text-sm">Please type your password </p> : null}
              </div>
              <div className="mb-[1rem]">
                <button
                  className="text-[#fff] text-base bg-black w-[100%] py-[.3rem] rounded outline-none"
                  onClick={signInHandler}
                >Sign in</button>
              </div>
              <div className="mb-[1rem] w-[100%] text-center">
                <p>Not have an <Link to={'/sign-up'} className='text-blue-600 underline'>Account</Link> ?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
