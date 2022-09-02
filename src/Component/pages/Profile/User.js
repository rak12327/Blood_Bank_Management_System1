import React, { useState } from "react";

const User = () => {
  const [updateAcc, setUpdateAcc] = useState(false);
  const [value, setValue] = useState({
    name: "Rohit",
    email: "rohitpramanik30593@gmail.com",
    adhaarNumber: "",
    phoneNumber: "",
    address: "",
    pinCode: "",
    age: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    console.log(value);
    setTimeout(() => {
      setLoading(false);
      setUpdateAcc(false);
    }, 5000);
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
                ? (e) => setValue({ name: e.target.value })
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
                ? (e) => setValue({ email: e.target.value })
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
                  ? (e) => setValue({ gender: e.target.value })
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
                  ? (e) => setValue({ age: e.target.value })
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
                  ? (e) => setValue({ adhaarNumber: e.target.value })
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
                  ? (e) => setValue({ phoneNumber: e.target.value })
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
                ? (e) => setValue({ address: e.target.value })
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
                ? (e) => setValue({ pinCode: e.target.value })
                : () => setValue({ pinCode: value.pinCode })
            }
            type="tel"
            className="px-[.5rem] py-[.4rem] w-[100%] text-sm"
          />
        </div>
        <div className="mt-[1.25rem] lg:m-0">
          <div className="flex items-start justify-between gap-[.5rem] flex-col lg:flex-row">
            {!updateAcc && (
              <button className="bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded">
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
                {loading && (
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
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
