import React from "react";
import { useState } from "react";
import NavBar from "../Home/NavBar";
import { useDispatch, useSelector } from 'react-redux'
import { contactUsForm } from "../../Redux/ContactUsSlice";
import { inValidCSS, validCSS } from "../../Export";
import { openAlert } from "../../Redux/AlertSlice";
import Loading from "../../Export/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector(state => state.contactUsForm)

  const [value, setValue] = useState({ name: "", email: "", message: "" })
  const [inputTouch, setInputTouch] = useState({ nameTouch: false, emailTouch: false, msgTouch: false })

  const handleChange = e => {
    setValue(values => ({ ...values, [e.target.name]: e.target.value }))
  }
  const user = useSelector(state => state.user.user);

  const submitHandler = async (e) => {
    e.preventDefault()

    if (value.email?.trim() !== "" && value.name?.trim() !== "" && value.message?.trim() !== "") {

      if (!user) {
        dispatch(openAlert({ message: "Your are not authenticated, Please login your self", color: "red" }));
        navigate("/sign-in", { state: { path: location.pathname } })
      } else {
        try {
          await dispatch(contactUsForm(value)).unwrap()
          dispatch(openAlert({ message: "your response was succussfully submited", color: "green" }))
        } catch (rejectedValueOrSerializedError) {
          dispatch(openAlert({ message: rejectedValueOrSerializedError?.error?.message, color: "red" }))
        }
        setInputTouch({ nameTouch: false, emailTouch: false, msgTouch: false })
        setValue({ name: "", email: "", message: "" })
      }

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
                  {loading && <Loading />}
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
