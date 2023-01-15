import React from "react";
import { useState } from "react";
import NavBar from "../Home/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { contactUsForm } from "../../Redux/Contact/ContactUsSlice";
import Loading from "../../Export/Icons/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultContactUs } from "../../Export/Default/contact";
import { toast } from "react-toastify";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.contactUsForm);

  const [value, setValue] = useState(defaultContactUs);

  const handleChange = (e) => {
    setValue((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const user = useSelector((state) => state.user.user);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      toast("Your are not authenticated, Please login your self", {
        variant: "error",
      });
      navigate("/sign-in", { state: { path: location.pathname } });
    } else {
      dispatch(contactUsForm({ value, setValue }));
    }
  };

  return (
    <div className="bg-[red] min-h-[100vh] h-full">
      <NavBar />
      <div className="max-w-[1300px] mx-auto">
        {/* Heading  */}
        <div className="text-center text-white">
          <h1 className=" font-bold text-2xl sm:text-4xl pt-4">Contact Us</h1>
          <h3 className="text-lg sm:text-xl">How Can We Help You?</h3>
        </div>

        {/* image container */}
        <div className="flex flex-wrap items-center justify-between p-4 lg:p-8 gap-10">
          <div className="w-[100%] lg:w-[40%]">
            <img
              src="/assets/contactUs.jpg"
              alt="..."
              className="w-[100%] rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-white rounded shadow-md">
            <form onSubmit={submitHandler}>
              <div className="mb-2">
                <label className="block mb-1">Full Name</label>
                <input
                  placeholder="Your Full Name"
                  onChange={handleChange}
                  value={value.name}
                  type={"text"}
                  name={"name"}
                  className={"inputField"}
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Email ID</label>
                <input
                  placeholder="Your email id"
                  type={"email"}
                  name={"email"}
                  value={value.email}
                  onChange={handleChange}
                  className={"inputField"}
                />
              </div>
              <div className="mb-2">
                <div className="block mb-1">Your Message</div>
                <textarea
                  placeholder="Leave your comment..."
                  type="text"
                  name={"message"}
                  value={value.message}
                  onChange={handleChange}
                  className={"inputField"}
                  style={{ height: "5rem", resize: "none" }}
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="text-white bg-black font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 float-right"
              >
                {loading && <Loading height={"1rem"} width={"1rem"} />}
                Submit
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
