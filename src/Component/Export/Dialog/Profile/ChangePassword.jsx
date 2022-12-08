import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { closeForm } from "../../../Redux/Model/DailogHandlerSlice";
import { defaultPasswordValue } from "../../Default/Password";
import { changePasswordThunk } from "../../../Redux/Authentication/ChangePasswordSlice";
import { openAlert } from "../../../Redux/Model/AlertSlice";

const ChangePassword = () => {
  const open = useSelector((state) => state.dailog?.type);

  const dispatch = useDispatch();

  const [passwordValue, setPasswordValue] = useState(defaultPasswordValue)

  const changeHandler = (e) => {
    setPasswordValue({ ...passwordValue, [e.target.name]: e.target.value })
  }

  const handleOpen = () => {
    dispatch(closeForm());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!passwordValue.currentPassword || !passwordValue.confirmPassword || !passwordValue.newPassword) {
      return dispatch(openAlert({ color: "yellow", message: "Please enter current, new and confirm password" }))
    }
    dispatch(changePasswordThunk({ value: passwordValue, dispatch, setPasswordValue }))
  }

  return (
    <Fragment>
      <Dialog
        open={open ? true : false}
        // handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="min-w-[90%] lg:min-w-[50%] w-[100%] "
      >
        <DialogHeader>Change Your Password</DialogHeader>
        <DialogBody
          divider
          className="block max-h-[30rem] overflow-x-hidden overflow-y-auto"
        >
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Current Password</label>
            <input
              placeholder="Your current password"
              value={passwordValue.currentPassword || ""}
              onChange={changeHandler}
              name="currentPassword"
              type="text"
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            />
          </div>
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">New Password</label>
            <input
              placeholder="Your current password"
              value={passwordValue.newPassword || ""}
              onChange={changeHandler}
              name="newPassword"
              type="text"
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            />
          </div>
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Confirm Password</label>
            <input
              placeholder="Your current password"
              value={passwordValue.confirmPassword || ""}
              onChange={changeHandler}
              name="confirmPassword"
              type="text"
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex items-center justify-between">
          <button onClick={handleOpen} className="userButton">
            Close
          </button>
          <button
            className="userButton"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default ChangePassword;
