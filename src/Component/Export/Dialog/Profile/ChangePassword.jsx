import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeForm } from "../../../Redux/Model/DailogHandlerSlice";
import { defaultPasswordValue } from "../../Default/Password";
import { changePasswordThunk } from "../../../Redux/Authentication/ChangePasswordSlice";
import { useSnackbar } from "notistack";
import { object, string } from "yup"

let schema = object({
  currentPassword: string().trim().min([8, "Current password must have 8 character"]).required("Current Password is required"),
});


const ChangePassword = () => {
  const open = useSelector((state) => state.dailog?.type);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();


  const [passwordValue, setPasswordValue] = useState(defaultPasswordValue)

  const changeHandler = (e) => {
    setPasswordValue({ ...passwordValue, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hello");
    await schema.validate(passwordValue.currentPassword, {
      abortEarly: false,
    })
    // if (!passwordValue.currentPassword || !passwordValue.confirmPassword || !passwordValue.newPassword) {
    //   return enqueueSnackbar("Please enter current, new and confirm password", { variant: "warning" })
    // }
    dispatch(changePasswordThunk({ value: passwordValue, dispatch, setPasswordValue, enqueueSnackbar }))
  }

  return (
    <Fragment>
      <Dialog
        open={open ? true : false}
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
              value={passwordValue.currentPassword}
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
              value={passwordValue.newPassword}
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
              value={passwordValue.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              type="text"
              className="px-[.5rem] py-[.4rem] w-[100%] text-sm rounded"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex items-center justify-between">
          <button onClick={() => dispatch(closeForm())} className="userButton">
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
