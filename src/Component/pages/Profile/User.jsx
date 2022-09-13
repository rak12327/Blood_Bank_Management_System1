import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Export/Loading";
import { updateUserThunk } from "../../Redux/UpdateSlice";
import { openAlert } from "../../Redux/AlertSlice";
import { dailogHandler } from "../../Redux/DailogHandlerSlice";
import { deleteUserData } from "../../Redux/UserDataSlice";
import { changePasswordThunk } from "../../Redux/ChangePasswordSlice";

const User = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.update);
  const dispatch = useDispatch();

  const [updateAcc, setUpdateAcc] = useState('');

  const [value, setValue] = useState({
    name: data?.user?.data?.name || "",
    email: data?.user?.data?.email || "",
    adhaarNumber: data?.user?.data?.adhaarNumber || "",
    phoneNumber: data?.user?.data?.phoneNumber || "",
    address: data?.user?.data?.address || "",
    pinCode: data?.user?.data?.pinCode || "",
    age: data?.user?.data?.age || "",
    gender: data?.user?.data?.gender || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });



  const submitHandler = (e) => {
    e.preventDefault();

    if (!data?.user?.data) {
      dispatch(openAlert({ message: "Opps, Something went wrong with your session. Please login again...", color: "yellow" }))
      return navigate("/sign-in")
    }

    if (updateAcc === 'update') {
      dispatch(updateUserThunk({ value: { ...value, id: data?.user?.data?._id }, dispatch, setUpdateAcc }))
    } else if (updateAcc === "change") {
      if (!value.currentPassword || !value.confirmPassword || !value.newPassword) {
        return dispatch(openAlert({ color: "yellow", message: "Please enter current, new and confirm password" }))
      }
      dispatch(changePasswordThunk({ value: { ...value, id: data?.user?.data?._id }, dispatch, setUpdateAcc, setValue }))
    } else {
      return dispatch(openAlert({ color: "yellow", message: "Opps, It's seems something went wrong. Please refresh it or login again" }))
    }
  }


  const logOut = () => {
    localStorage.removeItem("token");
    if (data.user) {
      dispatch(deleteUserData())
    }
    navigate("/sign-in");
  };

  console.log(updateAcc)

  return (
    <div className="basis-[70%] w-[100%] min-h-[50vh] h-[100%] pl-[1rem]">
      <div className="w-[100%] h-[100%]">
        <div className="mb-[.5rem]">
          <label className="block mb-[.2rem]">Name</label>
          <input
            placeholder="Your Name"
            type={"text"}
            name="name"
            value={value.name}
            disabled={updateAcc !== "update"}
            onChange={
              updateAcc === "update"
                ? (e) => setValue({ ...value, name: e.target.value })
                : () => setValue({ name: value.name })
            }
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
          />
        </div>
        <div className="mb-[.5rem]">
          <label className="block mb-[.2rem]">Email</label>
          <input
            placeholder="Your Email"
            name="email"
            value={value.email}
            disabled={updateAcc !== "update"}
            onChange={
              updateAcc === "update"
                ? (e) => setValue({ ...value, email: e.target.value })
                : () => setValue({ email: value.email })
            }
            type="email"
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
          />
        </div>
        {updateAcc !== 'change' ? (<>
          <div className="flex items-center justify-center gap-[1rem] flex-col-reverse md:flex-row-reverse">
            <div className="mb-[.5rem] w-[100%]">
              <label className="block mb-[.2rem]">Gender</label>
              <select
                placeholder="Gender"
                value={value.gender}
                name="gender"
                disabled={!updateAcc}
                onChange={
                  updateAcc
                    ? (e) => setValue({ ...value, gender: e.target.value })
                    : () => setValue({ gender: value.gender })
                }
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
                style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
              >
                <option value={"null"}>Select your Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Other</option>
              </select>
            </div>
            <div className="mb-[.5rem] w-[100%]">
              <label className="block mb-[.2rem]">Age</label>
              <input
                placeholder="Age"
                value={value.age}
                name="age"
                disabled={!updateAcc}
                onChange={
                  updateAcc
                    ? (e) => setValue({ ...value, age: e.target.value })
                    : () => setValue({ age: value.age })
                }
                type="tel"
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
                style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[1rem] flex-col-reverse md:flex-row-reverse">
            <div className="mb-[.5rem] w-[100%]">
              <label className="block mb-[.2rem]">Adhaar Number</label>
              <input
                placeholder="Adhaar Number"
                type={"tel"}
                maxLength={12}
                minLength={12}
                name="adhaarNumber"
                value={value.adhaarNumber}
                disabled={!updateAcc}
                onChange={
                  updateAcc
                    ? (e) => setValue({ ...value, adhaarNumber: e.target.value })
                    : () => setValue({ adhaarNumber: value.adhaarNumber })
                }
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
                style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
              />
              {updateAcc && false && value.adhaarNumber.length !== 12 && <p className="text-[red] text-sm">Please enter 12 digit adhaar number</p>}
            </div>
            <div className="mb-[.5rem] w-[100%]">
              <label className="block mb-[.2rem]">Phone Number</label>
              <input
                placeholder="Phone Number"
                value={value.phoneNumber}
                name="phoneNumber"
                disabled={!updateAcc}
                onChange={
                  updateAcc
                    ? (e) => setValue({ ...value, phoneNumber: e.target.value })
                    : () => setValue({ phoneNumber: value.pinCode })
                }
                type="tel"
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
                style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}

              />
            </div>
          </div>
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Address</label>
            <textarea
              placeholder="Your Name"
              value={value.address}
              disabled={!updateAcc}
              onChange={
                updateAcc
                  ? (e) => setValue({ ...value, address: e.target.value })
                  : () => setValue({ address: value.address })
              }
              className="px-[.5rem] py-[.4rem] w-[100%] text-[1rem] leading-[20px] rounded resize-none h-[3.5rem]"
              style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}

            />
          </div>
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Pin Code</label>
            <input
              placeholder="Your pin code"
              value={value.pinCode}
              disabled={!updateAcc}
              onChange={
                updateAcc
                  ? (e) => setValue({ ...value, pinCode: e.target.value })
                  : () => setValue({ pinCode: value.pinCode })
              }
              type="tel"
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
              style={updateAcc === "update" ? { color: "black" } : { color: "gray" }}
            />
          </div>
        </>
        ) :
          <>
            <div className="mb-[.5rem]">
              <label className="block mb-[.2rem]">Current Password</label>
              <input
                placeholder="Your current password"
                value={value.currentPassword}
                onChange={
                  (e) => setValue({ ...value, currentPassword: e.target.value })
                }
                type="text"
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
              />
            </div>
            <div className="mb-[.5rem]">
              <label className="block mb-[.2rem]">New Password</label>
              <input
                placeholder="Your current password"
                value={value.newPassword}
                onChange={
                  (e) => setValue({ ...value, newPassword: e.target.value })
                }
                type="text"
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
              />
            </div>
            <div className="mb-[.5rem]">
              <label className="block mb-[.2rem]">Confirm Password</label>
              <input
                placeholder="Your current password"
                value={value.confirmPassword}
                onChange={
                  (e) => setValue({ ...value, confirmPassword: e.target.value })
                }
                type="text"
                className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
              />
            </div>
          </>
        }
        <div className="mt-[1.25rem] lg:m-0">
          <div className="flex items-start justify-between gap-[.5rem] flex-col lg:flex-row">
            {!updateAcc && (
              <button
                className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded"
                onClick={logOut}
              >
                Log out
              </button>
            )}
            {!updateAcc && (
              <button className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded"
                onClick={() => setUpdateAcc("change")}
              >
                Reset Password
              </button>
            )}
            {!updateAcc && (
              <button
                className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded"
                onClick={() => setUpdateAcc("update")}
              >
                Update Account
              </button>
            )}
            {!updateAcc && (
              <button className="bg-[black] lg:w-auto w-full px-[1rem] py-[.4rem] text-[#fff] text-sm rounded"
                onClick={() => dispatch(dailogHandler())}
              >
                Delete Account
              </button>
            )}
            {updateAcc && <div className="flex items-start justify-between gap-[.5rem] flex-col-reverse lg:flex-row w-[100%]">
              <button
                className="bg-[black] w-full lg:w-auto text-[#fff] px-[1rem] py-[.4rem] text-sm rounded"
                onClick={() => setUpdateAcc("")}
              >Back</button>
              <button
                className="bg-[black] w-full lg:w-auto text-[#fff] px-[1rem] py-[.4rem] text-sm rounded"
                onClick={submitHandler}
              >
                {loading && <Loading height={'1rem'} width={'1rem'} />}
                Submit
              </button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
