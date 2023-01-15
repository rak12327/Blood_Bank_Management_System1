import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Export/Icons/Loading";
import { ResetPasswordThunk } from "../../Redux/Authentication/ResetPasswordSlice";
import { ResetDefault } from "../../Export/Default/Login";

const ResetPassword = () => {
  const [value, setValue] = useState(ResetDefault);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth);

  const changeHandler = (e) => {
    setValue((event) => ({
      ...event,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    return dispatch(
      ResetPasswordThunk({
        value,
        navigate,
        token: params?.token,
        setValue,
      })
    );
  };
  return (
    <div className="bg-[red] h-[100vh]">
      <div className="max-w-[1300px] mx-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]">
        <div className="flex items-center justify-center h-[90vh]">
          <div className="lg:w-[40%] w-[100%] p-[1rem] bg-[#fff] rounded">
            <form onSubmit={submitHandler}>
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">New Password</label>
                <input
                  placeholder="Your new password"
                  name="newPassword"
                  type={"password"}
                  value={value.newPassword}
                  onChange={changeHandler}
                  className="inputField"
                />
              </div>
              <div className="mb-[0.5rem]">
                <label className="block mb-[.2rem]">Confirm New Password</label>
                <input
                  placeholder="Confirm your new password"
                  name="confirmPassword"
                  type={"password"}
                  value={value.confirmPassword}
                  onChange={changeHandler}
                  className="inputField"
                />
              </div>

              <button
                type="submit"
                className="w-[100%] mt-[.5rem] bg-[black] text-[#fff] text-md py-[.5rem] rounded"
              >
                {userData?.loading && <Loading />}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
