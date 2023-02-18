import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { closeForm } from "../../Redux/Model/DailogHandlerSlice";
import { UpdatedRequestList } from "../../Redux/Request/RequestFromThunk";
import { defaultRequestValue } from "../Default/RequestForm";

export const RequestFormEdit = () => {
  const open = useSelector((state) => state?.dailog?.type);

  const [input, setInput] = useState(defaultRequestValue);

  const changeHandler = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(closeForm());
    setInput(defaultRequestValue);
  };

  const handleOpenForm = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(UpdatedRequestList({ dispatch, id: open, input, setInput }));
    }
  };

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
        <DialogHeader>Blood Order</DialogHeader>
        <DialogBody
          divider
          className="block max-h-[30rem] overflow-x-hidden overflow-y-auto"
        >
          {/* ----------Patient Name---------- */}
          <div className="mb-[.5rem] text-[#000]">
            <label className="block mb-[.2rem]">Patient Name</label>
            <input
              type={"text"}
              placeholder="Patient Name"
              className={"inputField"}
              value={input.patientName || ""}
              name={"patientName"}
              onChange={changeHandler}
            />
          </div>

          {/* ----------Age & Gender---------- */}
          <div className="flex items-start justify-between">
            <div className="basis-[48%]">
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Age</label>
                <input
                  type="tel"
                  placeholder="18"
                  className={"inputField"}
                  value={input.age || ""}
                  name="age"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="basis-[48%]">
              <div className="mb-[.5rem]">
                <label className="block mb-[.2rem]">Gender</label>
                <select
                  className={"inputField"}
                  value={input.gender || ""}
                  onChange={changeHandler}
                  name={"gender"}
                >
                  <option value={null}>Select Your Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Name of Hospital */}
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Name of Hospital</label>
            <input
              type={"text"}
              placeholder="Hospital Name"
              className={"inputField"}
              value={input.hospitalName || ""}
              name={"hospitalName"}
              onChange={changeHandler}
            />
          </div>

          {/* Hospital Phone number */}
          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Hospital Phone No.</label>
            <input
              type={"tel"}
              name="hospitalPhoneNumber"
              placeholder="Hospital Phone Number"
              className={"inputField"}
              value={input.hospitalPhoneNumber || ""}
              onChange={changeHandler}
              maxLength={10}
            />
          </div>

          {/* Consultant Name */}
          <div className="mb-[.8rem]">
            <label className="block mb-[.2rem]">Name Of Consultant</label>
            <input
              type={"text"}
              placeholder="Consultant Name"
              className={"inputField"}
              value={input.consultantName || ""}
              name={"consultantName"}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-[.5rem]">
            <label className="block mb-[.2rem]">Date of Receiving Blood</label>
            <Datepicker
              selected={input?.dateOfReceivingBlood}
              className={"inputField"}
              minDate={new Date()}
              onChange={(date) =>
                setInput((values) => ({
                  ...values,
                  dateOfReceivingBlood: date,
                }))
              }
              filterDate={(date) => date.getDay() !== 0}
              fixedHeight
            />
          </div>
          {/* </div> */}
        </DialogBody>
        <DialogFooter>
          <div className="flexBtw w-full">
            <button onClick={handleOpen} className="blackButton">
              <span>Cancel</span>
            </button>
            <button className="blackButton" onClick={handleOpenForm}>
              <span>Confirmm</span>
            </button>
          </div>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
