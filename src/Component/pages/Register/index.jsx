import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Export/Icons/Loading";
import { SignUpSliceThunk } from "../../Redux/Authentication/SignUpSlice";
import { defaultSignup } from "../../Export/Default/Login";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = useSelector((state) => state.auth);

  const [input, setInput] = useState(defaultSignup);

  const { enqueueSnackbar } = useSnackbar();

  const changeHandler = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(
      SignUpSliceThunk({ input, navigate, state, enqueueSnackbar, setInput })
    );
  };

  return (
    <div className="bg-red-500 h-screen">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 py-4">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="bg-[#fff] px-4 py-8 w-full lg:w-[40%] rounded">
            {/*---------Form Submission-------------*/}
            <form onSubmit={submitHandler}>
              {/*---------Heading-------------*/}
              <div className="text-center text-2xl font-bold mb-4">
                Register
              </div>

              {/*----------First Name------------*/}
              <div className="mb-2">
                <label className="block mb-1">First Name</label>
                <input
                  type={"text"}
                  name="firstName"
                  placeholder="First Name"
                  onChange={changeHandler}
                  value={input.firstName}
                  className="inputField"
                />
              </div>

              {/*----------Last Name------------*/}
              <div className="mb-2">
                <label className="block mb-1">Last Name</label>
                <input
                  type={"text"}
                  name={"lastName"}
                  placeholder="Last Name"
                  value={input.lastName || ""}
                  onChange={changeHandler}
                  className="inputField"
                />
              </div>

              {/*---------Email-------------*/}
              <div className="mb-2">
                <label className="block mb-1">Email</label>
                <input
                  type={"email"}
                  name={"email"}
                  placeholder="abc@gmail.com"
                  value={input.email || ""}
                  onChange={changeHandler}
                  className="inputField"
                />
              </div>

              {/*---------Password-------------*/}
              <div className="mb-4">
                <label className="mb-1 block">Passsword</label>
                <input
                  type={"password"}
                  name={"password"}
                  placeholder="Password"
                  value={input.password || ""}
                  onChange={changeHandler}
                  className="inputField"
                />
              </div>

              {/*----------Button------------*/}
              <div className="mb-2">
                <button className="w-full bg-black text-white text-base py-2 rounded outline-none">
                  {data.loading && <Loading width={"1rem"} height={"1rem"} />}
                  Sign Up
                </button>
              </div>

              {/*----------Link------------*/}
              <div className="w-full text-center">
                <p>
                  Already Have{" "}
                  <Link to={"/sign-in"} className="text-blue-600 underline">
                    Account
                  </Link>{" "}
                  ?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
