import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Export/Icons/Loading";
import { ForgotPasswordThunk } from "../../Redux/Authentication/ForgotPasswordSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(ForgotPasswordThunk({ email, setEmail }));
  };
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] m-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]">
        <div className="flex items-center justify-center h-[90vh]">
          <div className="lg:w-[40%] w-[100%] p-[1rem] bg-[#fff] rounded">
            <form onSubmit={submitHandler}>
              <div className="mb-[1rem]">
                <label className="mb-[.2rem] block">Register Email ID</label>
                <input
                  type={"text"}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button
                type="submit"
                className="w-[100%] text-center bg-[black] text-[#fff] text-md py-[.5rem] rounded"
              >
                {userData.loading && <Loading width={"1rem"} height={"1rem"} />}
                Submit
              </button>
            </form>

            <div className="w-[100%] text-center mt-[.5rem]">
              <span>
                Remember{" "}
                <Link to="/sign-in" className="underline text-blue-600">
                  Password
                </Link>{" "}
                ?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
