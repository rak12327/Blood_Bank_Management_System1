import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../Export/Loading";

const User = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);

  const [updateAcc, setUpdateAcc] = useState(false);
  const [value, setValue] = useState({
    name: data?.user?.data?.name || "",
    email: data?.user?.data?.email,
    adhaarNumber: data?.user?.data?.adhaarNumber || "",
    phoneNumber: data?.user?.data?.phoneNumber || "",
    address: data?.user?.data?.address || "",
    pinCode: data?.user?.data?.pinCode || "",
    age: data?.user?.data?.age || "",
    gender: data?.user?.data?.gender || "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUpdateAcc(false);
      console.log(value);
    }, 5000);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

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
            disabled={!updateAcc}
            onChange={
              updateAcc
                ? (e) => setValue({ ...value, name: e.target.value })
                : () => setValue({ name: value.name })
            }
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
          />
        </div>
        <div className="mb-[.5rem]">
          <label className="block mb-[.2rem]">Email</label>
          <input
            placeholder="Your Email"
            name="email"
            value={value.email}
            disabled={!updateAcc}
            onChange={
              updateAcc
                ? (e) => setValue({ ...value, email: e.target.value })
                : () => setValue({ email: value.email })
            }
            type="email"
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
          />
        </div>
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
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1rem] flex-col-reverse md:flex-row-reverse">
          <div className="mb-[.5rem] w-[100%]">
            <label className="block mb-[.2rem]">Adhaar Number</label>
            <input
              placeholder="Adhaar Number"
              type={"tel"}
              name="adhaarNumber"
              value={value.adhaarNumber}
              disabled={!updateAcc}
              onChange={
                updateAcc
                  ? (e) => setValue({ ...value, adhaarNumber: e.target.value })
                  : () => setValue({ adhaarNumber: value.adhaarNumber })
              }
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            />
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
            />
          </div>
        </div>
        <div className="mb-[.5rem]">
          <label className="block mb-[.2rem]">Address</label>
          <textarea
            placeholder="Your Name"
            style={{ resize: "none", height: "3.5rem" }}
            value={value.address}
            disabled={!updateAcc}
            onChange={
              updateAcc
                ? (e) => setValue({ ...value, address: e.target.value })
                : () => setValue({ address: value.address })
            }
            className="px-[.5rem] py-[.4rem] w-[100%] text-[1rem] leading-[20px] rounded"
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
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm"
          />
        </div>
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
              <button className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded">
                Reset Password
              </button>
            )}
            {!updateAcc ? (
              <button
                className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded"
                onClick={() => setUpdateAcc(true)}
              >
                Update Account
              </button>
            ) : (
              <button
                className="bg-[black] w-full lg:w-auto text-[#fff] px-[1rem] py-[.4rem] text-sm rounded"
                onClick={submitHandler}
              >
                {loading && <Loading width={"1rem"} height={"1rem"} />}
                Submit
              </button>
            )}
            {!updateAcc && (
              <button className="bg-[black] lg:w-auto w-full px-[1rem] py-[.4rem] text-[#fff] text-sm rounded">
                Delete Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
