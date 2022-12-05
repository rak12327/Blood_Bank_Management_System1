import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { emailValid, inValidCSS, validCSS } from "../../Export";
import Loading from "../../Export/Icons/Loading";
import { openAlert } from "../../Redux/Model/AlertSlice";
import { SignInThunk } from "../../Redux/Authentication/SignInSlice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation()
  const data = useSelector(state => state.signin);

  const [value, setValue] = useState({ email: "", password: "" })

  const [touch, setTouch] = useState({ emailTouch: false, passwordTouch: false })

  const signInHandler = (e) => {
    e.preventDefault()

    if (emailValid(value.email) && value.password?.length >= 8) {
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

          <div className="bg-[#fff] w-[100%] lg:w-[40%] rounded-lg shadow-md">
            <form className="px-[1rem] pt-[1rem]">
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
                  className={touch.emailTouch && !emailValid(value.email) ? inValidCSS : validCSS}
                />
                {touch.emailTouch && !emailValid(value.email) ? <p className="text-[red] text-sm">Please type your email id</p> : null}
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
                    <Loading width={"1rem"} height={"1rem"} />
                  )}
                  Sign in</button>
              </div>

            </form>
            <div className="mb-[1rem] w-[100%] text-right px-[1rem]">
              <Link to={'/forgot-password'} className="text-gray-600">Forgot Password?</Link>
            </div>
            <div className="mb-[1rem] w-[100%] text-center border-t border-black pt-[.5rem]">
              <p>Not have an <Link to={'/sign-up'} className='text-blue-600 underline'>Account</Link> ?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
