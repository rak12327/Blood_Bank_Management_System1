import React from "react";
import { useState } from "react";
import NavBar from "../Home/NavBar";
import { useDispatch, useSelector } from 'react-redux'
import { contactUsForm } from "../../Redux/ContactUsSlice";
import { inValidCSS, validCSS } from "../../Export";
import { openAlert } from "../../Redux/AlertSlice";

const Contact = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.contactUsForm)

  const [value, setValue] = useState({ name: "", email: "", message: "" })
  const [inputTouch, setInputTouch] = useState({ nameTouch: false, emailTouch: false, msgTouch: false })

  const handleChange = e => {
    setValue(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (value.email?.trim() !== "" && value.name?.trim() !== "" && value.message?.trim() !== "") {
      console.log(value);

      try {
        await dispatch(contactUsForm(value)).unwrap()
        dispatch(openAlert({ message: "your response was succussfully submited", color: "green" }))

      } catch (rejectedValueOrSerializedError) {
        dispatch(openAlert({ message: rejectedValueOrSerializedError?.error?.message, color: "red" }))
      }

      setInputTouch({ nameTouch: false, emailTouch: false, msgTouch: false })

      setValue({ name: "", email: "", message: "" })

    } else {
      setInputTouch({ nameTouch: true, emailTouch: true, msgTouch: true })
      dispatch(openAlert({ message: "please fill all value", color: "red" }))
    }


  }

  return (
    <div className="bg-[red] min-h-[100vh] h-[100%]">
      <NavBar />
      <div className="max-w-[1300px] mx-auto">

        {/* Heading  */}
        <div className="text-center text-white">
          <h1 className=" font-bold text-4xl pt-[1rem]">Contact Us</h1>
          <h3 className="text-xl">How Can We Help You?</h3>
        </div>


        {/* image container */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-[1rem] lg:px-[2rem] py-[1rem] lg:py-[2rem] gap-10">
          <div className="w-[100%] lg:w-[40%]">
            <img src="/assets/contactUs.jpg" alt="..." className="w-[100%] rounded-xl" />
          </div>
          <div className="w-[100%] lg:w-[50%] px-[1rem] py-[1rem] bg-[#fff] rounded shadow-md">
            <form onSubmit={submitHandler}>
              <div className="mb-2">
                <label className="block mb-1">Full Name</label>
                <input
                  placeholder="Your Full Name"
                  onChange={handleChange}
                  onBlur={() => setInputTouch(e => ({ ...e, nameTouch: true }))}
                  value={value.name}
                  type={"text"}
                  name={"name"}
                  className={inputTouch.nameTouch && value.name?.trim() === "" ? inValidCSS : validCSS} />
                {inputTouch.nameTouch && value.name?.trim() === "" ? <p className="text-[red] text-sm">Please enter your Full Name</p> : null}
              </div>
              {/* <div className="mb-2">
                <label className="block mb-1">Phone Number</label>
                <input placeholder="Your Full Name" type={"text"} className="block w-full py-1 px-2 leading-[.5rem] text-[1rem] rounded hover:bg-sky-100 focus:bg-sky-100 focus:border-sky-100" />
              </div> */}
              <div className="mb-2">
                <label className="block mb-1">Email ID</label>
                <input
                  placeholder="Your email id"
                  type={"email"}
                  name={"email"}
                  value={value.email}
                  onChange={handleChange}
                  onBlur={() => setInputTouch(e => ({ ...e, emailTouch: true }))}
                  className={inputTouch.emailTouch && value.email?.trim() === "" ? inValidCSS : validCSS}
                />
                {inputTouch.emailTouch && value.email?.trim() === "" && <p className="text-[red] text-sm">Please enter your email address</p>}
              </div>
              <div className="mb-2">
                <div className="block mb-1">Your Message</div>
                <textarea
                  placeholder="Leave your comment..."
                  type="text"
                  name={"message"}
                  value={value.message}
                  onChange={handleChange}
                  onBlur={() => setInputTouch(e => ({ ...e, msgTouch: true }))}
                  className={inputTouch.msgTouch && value.message?.trim() === "" ? inValidCSS : validCSS}
                  style={{ height: "5rem", resize: "none" }} />
                {inputTouch.msgTouch && value.message?.trim() === "" && <p className="text-[red] text-sm">Please enter your Message</p>}
              </div>
              <div className="text-right">

                <button disabled={loading} type="submit" className="text-white bg-[black] font-medium rounded-lg text-sm px-[1rem] py-[.5rem] text-center mr-2 inline-flex items-center">
                  {loading && <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>}
                  Submit
                </button>
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
