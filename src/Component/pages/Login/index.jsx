import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { defaultValue } from "../../Export/Default/Login";
import Loading from "../../Export/Icons/Loading";
import { SignInThunk } from "../../Redux/Authentication/SignInSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = useSelector((state) => state.auth);

  const [value, setValue] = useState(defaultValue);
  const { enqueueSnackbar } = useSnackbar();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const signInHandler = (e) => {
    e.preventDefault();

    dispatch(
      SignInThunk({ value, navigate, state, enqueueSnackbar, setValue })
    );
  };
  return (
    <div className="bg-red-500 h-screen">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 py-8">
        <div className="center h-[90vh]">
          <div className="bg-white w-full lg:w-2/5 rounded-lg shadow-md">
            <form className="px-4 pt-4" onSubmit={signInHandler}>
              <h1 className="text-center font-bold text-2xl mb-4">Sign In</h1>
              <div className="mb-4">
                <label className="block mb-1 text-base">Email ID</label>
                <input
                  type={"email"}
                  placeholder="Email ID"
                  value={value.email}
                  name={"email"}
                  onChange={changeHandler}
                  className={"inputField"}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-base">Password</label>
                <input
                  type={"password"}
                  placeholder="Password"
                  value={value.password}
                  name={"password"}
                  onChange={changeHandler}
                  className={"inputField"}
                />
              </div>
              <div className="mb-4">
                <button
                  className="text-white text-base bg-black w-full py-1 rounded outline-none inline-block"
                  type="submit"
                >
                  {data.loading && <Loading width={"1rem"} height={"1rem"} />}
                  Sign in
                </button>
              </div>
            </form>
            <div className="mb-4 w-full text-right px-4">
              <Link to={"/forgot-password"} className="text-gray-600">
                Forgot Password?
              </Link>
            </div>
            <div className="mb-4 w-full text-center border-t border-black pt-2">
              <p>
                Not have an{" "}
                <Link to={"/sign-up"} className="text-blue-600 underline">
                  Account
                </Link>{" "}
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
