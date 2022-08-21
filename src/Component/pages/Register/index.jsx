import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [input, setInput] = useState({
    firstName: "", lastName: "", email: "", password: ""
  })
  const [touch, setTouch] = useState({
    firstNameTouch: false, lastNameTouch: false, emailTouch: false, passwordTouch: false
  })

  const changeHandler = e => {
    setInput(values => ({ ...values, [e.target.name]: e.target.value }))
  }


  const validCSS = "w-[100%] px-[.5rem] py-[.4rem] border-black border-[.01rem] rounded focus:outline-none hover:bg-sky-50 focus:bg-sky-50"
  const inValidCSS = "w-[100%] px-[.5rem] py-[.4rem] border-[red] border-[.01rem] rounded focus:outline-none hover:bg-sky-50 focus:bg-sky-50"

  const submitHandler = e => {
    e.preventDefault()

    if (input.firstName.length >= 4 && input.lastName.length >= 4 && input.email.includes("@") && input.password.length >= 8) {
      console.log(input);
      console.log(touch)

      setInput({ firstName: "", lastName: "", email: "", password: "" })
      setTouch({
        firstNameTouch: false, lastNameTouch: false, emailTouch: false, passwordTouch: false
      })
    } else {
      setTouch({ firstNameTouch: true, lastNameTouch: true, emailTouch: true, passwordTouch: true })
      alert("Please enter all value")
    }
  }

  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="bg-[#fff] px-[1rem] py-[2rem] w-[30%] rounded">

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
                <button className="w-[100%] bg-black text-[#fff] text-base py-[.5rem] rounded outline-none">Sign Up</button>
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
