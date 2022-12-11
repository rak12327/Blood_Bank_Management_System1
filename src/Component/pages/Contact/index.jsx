import React from "react";
import { useState } from "react";
import NavBar from "../Home/NavBar";
import { useDispatch, useSelector } from 'react-redux'
import { contactUsForm } from "../../Redux/Contact/ContactUsSlice";
import { emailValid, validCSS } from "../../Export";
import Loading from "../../Export/Icons/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultContactUs } from "../../Export/Default/contact";
import { useSnackbar } from "notistack";

const Contact = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector(state => state.contactUsForm)

  const { enqueueSnackbar } = useSnackbar()

  const [value, setValue] = useState(defaultContactUs)

  const handleChange = e => {
    setValue(values => ({ ...values, [e.target.name]: e.target.value }))
  }
  const user = useSelector(state => state.user.user);

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!user) {
      enqueueSnackbar("Your are not authenticated, Please login your self", { variant: "error" });
      navigate("/sign-in", { state: { path: location.pathname } })
    } else {
      dispatch(contactUsForm({ value, enqueueSnackbar, setValue }))
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
                  value={value.name}
                  type={"text"}
                  name={"name"}
                  className={validCSS} />
                {/* {inputTouch.nameTouch && value.name?.trim() === "" ? <p className="text-[red] text-sm">Please enter your Full Name</p> : null} */}
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
                  className={validCSS}
                />
                {/* {inputTouch.emailTouch && !emailValid(value.email) && <p className="text-[red] text-sm">Please enter your email address</p>} */}
              </div>
              <div className="mb-2">
                <div className="block mb-1">Your Message</div>
                <textarea
                  placeholder="Leave your comment..."
                  type="text"
                  name={"message"}
                  value={value.message}
                  onChange={handleChange}
                  className={validCSS}
                  style={{ height: "5rem", resize: "none" }} />
                {/* {inputTouch.msgTouch && value.message?.trim() === "" && <p className="text-[red] text-sm">Please enter your Message</p>} */}
              </div>
              <div className="text-right">

                <button disabled={loading} type="submit" className="text-white bg-[black] font-medium rounded-lg text-sm px-[1rem] py-[.5rem] text-center mr-2 inline-flex items-center">
                  {loading && <Loading height={'1rem'} width={'1rem'} />}
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
