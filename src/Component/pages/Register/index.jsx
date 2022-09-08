import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { inValidCSS, validCSS } from "../../Export";
import { openAlert } from "../../Redux/AlertSlice";
import { UserSliceThunk } from "../../Redux/UserSlice";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = useSelector(state => state.signup)

  const [input, setInput] = useState({
    firstName: "", lastName: "", email: "", password: ""
  })
  const [touch, setTouch] = useState({
    firstNameTouch: false, lastNameTouch: false, emailTouch: false, passwordTouch: false
  })

  const changeHandler = e => {
    setInput(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (input.firstName.length >= 4 && input.lastName.length >= 4 && input.email.includes("@") && input.password.length >= 8) {
      const value = {
        name: input.firstName + " " + input.lastName,
        email: input.email,
        password: input.password
      }

      dispatch(UserSliceThunk({ value, dispatch, navigate, state }))

      setInput({ firstName: "", lastName: "", email: "", password: "" })
      setTouch({
        firstNameTouch: false, lastNameTouch: false, emailTouch: false, passwordTouch: false
      })
    } else {
      setTouch({ firstNameTouch: true, lastNameTouch: true, emailTouch: true, passwordTouch: true })

      dispatch(openAlert({ message: "Please field all value", color: "yellow" }))
    }
  }

  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="bg-[#fff] px-[1rem] py-[2rem] w-[100%] lg:w-[30%] rounded">

            {/*---------Form Submission-------------*/}
            <form onSubmit={submitHandler}>

              {/*---------Heading-------------*/}
              <div className="text-center text-2xl font-bold mb-[1rem]">Register</div>

              {/*----------First Name------------*/}
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">First Name</label>
                <input
                  type={"text"}
                  name="firstName"
                  placeholder="First Name"
                  onChange={changeHandler}
                  onBlur={() => setTouch(event => ({ ...event, firstNameTouch: true }))}
                  value={input.firstName || ""}
                  className={input.firstName?.trim() === "" && touch.firstNameTouch ? inValidCSS : validCSS}
                />
                {input.firstName?.trim() === "" && touch.firstNameTouch ? <p className="text-[red] text-sm">Please enter your first name</p> : null}
              </div>

              {/*----------Last Name------------*/}
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Last Name</label>
                <input
                  type={"text"}
                  name={"lastName"}
                  placeholder='Last Name'
                  value={input.lastName || ""}
                  onChange={changeHandler}
                  onBlur={() => setTouch(event => ({ ...event, lastNameTouch: true }))}
                  className={input.lastName.trim() === "" && touch.lastNameTouch ? inValidCSS : validCSS}
                />
                {input.lastName?.trim() === "" && touch.lastNameTouch ? <p className="text-[red] text-sm">Please enter your last name</p> : null}
              </div>

              {/*---------Email-------------*/}
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Email</label>
                <input
                  type={"email"}
                  name={"email"}
                  placeholder='abc@gmail.com'
                  value={input.email || ""}
                  onChange={changeHandler}
                  onBlur={() => setTouch(event => ({ ...event, emailTouch: true }))}
                  className={input.email?.trim() === "" && touch.emailTouch ? inValidCSS : validCSS}
                />
                {input.email?.trim() === "" && touch.emailTouch ? <p className="text-[red] text-sm">Please enter your email</p> : null}
              </div>

              {/*---------Password-------------*/}
              <div className="mb-[1rem]">
                <label className="mb-[.2rem] block">Passsword</label>
                <input
                  type={"password"}
                  name={"password"}
                  placeholder="Password"
                  value={input.password || ""}
                  onChange={changeHandler}
                  onBlur={() => setTouch(event => ({ ...event, passwordTouch: true }))}
                  className={input.password?.trim() === "" && touch.passwordTouch ? inValidCSS : validCSS}
                />
                {input.password.trim() === "" && touch.passwordTouch ? <p className="text-[red] text-sm">Please enter your password</p> : null}
              </div>

              {/*----------Button------------*/}
              <div className="mb-[.5rem]">
                <button className="w-[100%] bg-black text-[#fff] text-base py-[.5rem] rounded outline-none">
                  {data.loading && <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>}
                  Sign Up</button>
              </div>

              {/*----------Link------------*/}
              <div className="w-[100%] text-center">
                <p>Already Have <Link to={"/sign-in"} className='text-blue-600 underline'>Account</Link> ?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
