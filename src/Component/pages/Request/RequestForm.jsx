import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { inValidCSS, validCSS } from "../../Export";
import { defaultRequestValue } from "../../Export/Default/RequestForm";
import Loading from "../../Export/Icons/Loading";
import { openAlert } from "../../Redux/Model/AlertSlice";
import { requestFormThunk } from "../../Redux/Request/RequestFormSlice";

const RequestForm = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);
  const data = useSelector((state) => state.requestModel.requestData);
  const { enqueueSnackbar } = useSnackbar();

  const [input, setInput] = useState(defaultRequestValue);

  const changeHandler = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.requestForm);

  const { token } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      requestFormThunk({
        input: {
          ...input,
          email: userData?.email,
          componentName: data.componentName,
          price: data.price,
          unit: data.unit,
        },
        dispatch,
        navigate,
        token,
      })
    );
  };

  return (
    <>
      <div className="bg-[red] min-h-[100vh]">
        <div className="max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem] h-[100%]">
          <div className="flex items-center justify-center h-[100%]">
            <div className="max-w-[900px] w-[100%] h-[100%]">
              <div className="bg-[#fff] px-[1rem] py-[1.5rem]">
                <form>
                  <div className="w-[100%]">
                    {/* ----------Patient Name---------- */}
                    <div className="mb-[.5rem]">
                      <label className="block mb-[.2rem]">Patient Name</label>
                      <input
                        type={"text"}
                        placeholder="Patient Name"
                        className={validCSS}
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
                            className={validCSS}
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
                            className={validCSS}
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
                      <label className="block mb-[.2rem]">
                        Name of Hospital
                      </label>
                      <input
                        type={"text"}
                        placeholder="Hospital Name"
                        className={validCSS}
                        value={input.hospitalName || ""}
                        name={"hospitalName"}
                        onChange={changeHandler}
                      />
                    </div>

                    {/* Hospital Phone number */}
                    <div className="mb-[.5rem]">
                      <label className="block mb-[.2rem]">
                        Hospital Phone No.
                      </label>
                      <input
                        type={"tel"}
                        name="hospitalPhoneNumber"
                        placeholder="Hospital Phone Number"
                        className={validCSS}
                        value={input.hospitalPhoneNumber || ""}
                        onChange={changeHandler}
                      />
                    </div>

                    {/* Consultant Name */}
                    <div className="mb-[.8rem]">
                      <label className="block mb-[.2rem]">
                        Name Of Consultant
                      </label>
                      <input
                        type={"text"}
                        placeholder="Consultant Name"
                        className={validCSS}
                        value={input.consultantName || ""}
                        name={"consultantName"}
                        onChange={changeHandler}
                      />
                    </div>

                    <div className="mb-[.5rem]">
                      <label className="block mb-[.2rem]">
                        Date of Receiving Blood
                      </label>
                      <Datepicker
                        selected={input?.dateOfReceivingBlood}
                        className={validCSS}
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
                  </div>
                  {/* </div> */}
                  <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-[.5rem] mt-[.5rem]">
                    <button
                      className="bg-[black] text-[#fff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/request");
                      }}
                    >
                      Back
                    </button>
                    <button
                      onClick={submitHandler}
                      disabled={responseData.loading}
                      className="bg-[black] text-[#ffff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded"
                    >
                      {responseData.loading && <Loading />}
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
