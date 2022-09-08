import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { inValidCSS, validCSS } from "../../Export";
import Loading from "../../Export/Loading";
import { openAlert } from "../../Redux/AlertSlice";
import { SignInThunk } from "../../Redux/SignInSlice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation()
  const data = useSelector(state => state.signin);

  const [value, setValue] = useState({ email: "", password: "" })

  const [touch, setTouch] = useState({ emailTouch: false, passwordTouch: false })



  const signInHandler = (e) => {
    e.preventDefault()

    if (value.email?.length >= 4 && value.password?.length >= 4) {
      dispatch(SignInThunk({ value, dispatch, navigate, state }))

      setValue({ email: "", password: "" })
      setTouch({ emailTouch: false, passwordTouch: false })
    } else {
      setTouch({ emailTouch: true, passwordTouch: true })
      dispatch(openAlert({ message: "Please enter your email and password", color: "yellow" }))
    }
  }
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[2rem]">
        <div className="flex justify-center items-center h-[90vh]">

          <div className="bg-[#fff] p-[1rem] w-[100%] lg:w-[30%] rounded-lg shadow-md">
            <form>
              <h1 className="text-center font-bold text-2xl mb-[1rem]">Sign In</h1>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem] text-base">Email ID</label>
                <input
                  type={"email"}
                  placeholder='Email ID'
                  value={value.email}
                  name={"email"}
                  onChange={(e) => setValue(value => ({ ...value, [e.target.name]: e.target.value }))}
                  onBlur={() => setTouch(e => ({ ...e, emailTouch: true }))}
                  className={touch.emailTouch && value.email?.trim() === "" ? inValidCSS : validCSS}
                />
                {touch.emailTouch && value.email?.trim() === "" ? <p className="text-[red] text-sm">Please type your email id</p> : null}
              </div>
              <div className="mb-[1rem]">
                <label className="block mb-[.2rem] text-base">Password</label>
                <input
                  type={"password"}
                  placeholder='Password'
                  value={value.password}
                  name={"password"}
                  onChange={(e) => setValue(value => ({ ...value, [e.target.name]: e.target.value }))}
                  onBlur={() => setTouch(e => ({ ...e, passwordTouch: true }))}
                  className={touch.passwordTouch && value.password?.trim() === "" ? inValidCSS : validCSS}
                />
                {touch.passwordTouch && value.password?.trim() === "" ? <p className="text-[red] text-sm">Please type your password </p> : null}
              </div>
              <div className="mb-[1rem]">
                <button
                  className="text-[#fff] text-base bg-black w-[100%] py-[.3rem] rounded outline-none inline-block"
                  onClick={signInHandler}
                >
                  {data.loading && (
                    <Loading />
                  )}
                  Sign in</button>
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
