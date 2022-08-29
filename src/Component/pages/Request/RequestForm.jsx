import React from 'react'
import { useState } from 'react'
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { inValidCSS, validCSS } from '../../Export';
import { openAlert } from '../../Redux/AlertSlice';
import { requestFormThunk } from '../../Redux/RequestFormSlice';


const RequestForm = () => {

  const navigate = useNavigate()

  const [touch, setTouch] = useState({ name: false, phoneNumber: false, adhaarNumber: false, address: false, pinCode: false, patientName: false, age: false, gender: false, hospitalName: false, hospitalPhoneNumber: false, consultantName: false, dateOfReceivingBlood: false })
  const [input, setInput] = useState({ name: "", phoneNumber: "", adhaarNumber: "", address: "", pinCode: "", patientName: "", age: "", gender: "", hospitalName: "", hospitalPhoneNumber: "", consultantName: "", dateOfReceivingBlood: "" })

  const changeHandler = e => {
    setInput(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()
  const responseData = useSelector(state => state.requestForm)

  console.log(responseData)

  const submitHandler = async (e) => {
    e.preventDefault()

    if (input.name?.length >= 4 && input.phoneNumber?.length >= 10) {
      console.log(input);
      try {
        await dispatch(requestFormThunk({ input, dispatch, navigate })).unwrap()
      } catch (rejectedValueOrSerializedError) {
        dispatch(openAlert({ message: rejectedValueOrSerializedError?.message, color: "red" }))
      }
      setTouch({ name: false, phoneNumber: false, adhaarNumber: false, address: false, pinCode: false, patientName: false, age: false, gender: false, hospitalName: false, hospitalPhoneNumber: false, consultantName: false, dateOfReceivingBlood: false })
      setInput({ name: "", phoneNumber: "", adhaarNumber: "", address: "", pinCode: "", patientName: "", age: null, gender: "", hospitalName: "", hospitalPhoneNumber: "", consultantName: "", dateOfReceivingBlood: null })
    } else {
      setTouch({ name: true, phoneNumber: true, adhaarNumber: true, address: true, pinCode: true, patientName: true, age: true, gender: true, hospitalName: true, hospitalPhoneNumber: true, consultantName: true, dateOfReceivingBlood: true })
      dispatch(openAlert({ message: "Please fill all value", color: "red" }))
    }
  }


  return (
    <>
      <div className='bg-[red] h-[100vh]'>
        <div className='max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]'>
          <div className='flex items-center justify-center h-[90vh]'>
            <div className='max-w-[900px] w-[100%]'>
              <div className='bg-[#fff] px-[1rem] py-[1.5rem]'>

                <form>
                  <div className='flex items-start justify-around'>

                    {/* Form A side */}
                    <div className='basis-[48%]'>

                      {/* ----------Name---------- */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Name</label>
                        <input
                          type={"text"}
                          placeholder="Your Name"
                          name={"name"}
                          value={input?.name || ""}
                          onChange={changeHandler}
                          onBlur={() => setTouch(touch => ({ ...touch, name: true }))}
                          className={input.name?.trim() === "" && touch.name ? inValidCSS : validCSS}
                        />
                        {input.name?.trim() === "" && touch.name && <p className='text-[red] text-sm'>Please enter your name</p>}
                      </div>

                      {/* ----------Phone Number---------- */}
                      <div className='mb-[.5rem]'>
                        <label className='mb-[.2rem] block'>Phone Number</label>
                        <input
                          type={"tel"}
                          placeholder='Your Phone number'
                          value={input?.phoneNumber || ""}
                          name={"phoneNumber"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(touch => ({ ...touch, phoneNumber: true }))}
                          className={input.phoneNumber?.length !== 10 && touch.phoneNumber ? inValidCSS : validCSS}
                        />
                        {input.phoneNumber?.length !== 10 && touch.phoneNumber && <p className='text-[red] text-sm'>Please enter your 10 digit phone number</p>}
                      </div>

                      {/* ----------Adhaar Number---------- */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Adhaar Number</label>
                        <input
                          type={"tel"}
                          placeholder="Your Adhaar number"
                          name={"adhaarNumber"}
                          value={input.adhaarNumber || ""}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, adhaarNumber: true }))}
                          className={input.adhaarNumber?.length !== 12 && touch.adhaarNumber ? inValidCSS : validCSS}
                        />
                        {input.adhaarNumber?.length !== 12 && touch.adhaarNumber && <p className='text-[red] text-sm'>Please enter your 12 digit adhaar Number</p>}
                      </div>

                      {/* ----------Address---------- */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Address</label>
                        <textarea
                          type={"text"}
                          placeholder="Your Address"
                          className={input.address.trim() === "" && touch.address ? inValidCSS : validCSS}
                          style={{ height: "6.5rem", resize: "none" }}
                          value={input.address || ""}
                          name={"address"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, address: true }))}
                        />
                        {input.address.trim() === "" && touch.address && <p className='text-[red] text-sm'>Please enter your address</p>}
                      </div>

                      {/* ----------Pin Code---------- */}
                      <div className='mb-[.5rem]'>
                        <label className="block mb-[.2rem]">Pin Code</label>
                        <input
                          type={"tel"}
                          placeholder="Your Pin code"
                          className={input.pinCode.length !== 6 && touch.pinCode ? inValidCSS : validCSS}
                          value={input.pinCode || ""}
                          name={"pinCode"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, pinCode: true }))}
                        />
                        {input.pinCode.length !== 6 && touch.pinCode && <p className='text-[red] text-sm'>Please enter your city pin code</p>}
                      </div>
                    </div>

                    {/* ----------Form B side---------- */}
                    <div className='basis-[48%]'>

                      {/* ----------Patient Name---------- */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Patient Name</label>
                        <input
                          type={"text"}
                          placeholder="Patient Name"
                          className={input.patientName.trim() === "" && touch.patientName ? inValidCSS : validCSS}
                          value={input.patientName || ""}
                          name={"patientName"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, patientName: true }))}
                        />
                        {input.patientName?.trim() === "" && touch.patientName && <p className='text-[red] text-sm'>Please enter patient name</p>}
                      </div>

                      {/* ----------Age & Gender---------- */}
                      <div className='flex items-start justify-between'>
                        <div className='basis-[48%]'>
                          <div className='mb-[.5rem]'>
                            <label className='block mb-[.2rem]'>Age</label>
                            <input
                              type="tel"
                              placeholder='18'
                              className={input.age < 17 && touch.age ? inValidCSS : validCSS}
                              value={input.age || ""}
                              name="age"
                              onChange={changeHandler}
                              onBlur={() => setTouch(event => ({ ...event, age: true }))}
                            />
                            {input.age < 17 && touch.age && <p className='text-[red] text-sm'>Please enter your age, make sure your age must +18</p>}
                          </div>
                        </div>
                        <div className='basis-[48%]'>
                          <div className='mb-[.5rem]'>
                            <label className='block mb-[.2rem]'>Gender</label>
                            <select
                              className={input.gender.trim() === "" && touch.gender ? inValidCSS : validCSS}
                              value={input.gender || ""}
                              onChange={changeHandler}
                              name={"gender"}
                              onBlur={() => setTouch(event => ({ ...event, gender: true }))}
                            >
                              <option value={null}>Select Your Gender</option>
                              <option value={"male"}>Male</option>
                              <option value={"female"}>Female</option>
                              <option value={"other"}>Other</option>
                            </select>
                            {input.gender.trim() === "" && touch.gender && <p className='text-[red] text-sm'>Please select gender</p>}
                          </div>
                        </div>
                      </div>

                      {/* Name of Hospital */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Name of Hospital</label>
                        <input
                          type={"text"}
                          placeholder="Hospital Name"
                          className={input.hospitalName.trim() === "" && touch.hospitalName ? inValidCSS : validCSS}
                          value={input.hospitalName || ""}
                          name={"hospitalName"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, hospitalName: true }))}
                        />
                        {input.hospitalName.trim() === "" && touch.hospitalName && <p className='text-[red] text-sm'>Please give Hospital Name</p>}
                      </div>

                      {/* Hospital Phone number */}
                      <div className='mb-[.5rem]'>
                        <label className='block mb-[.2rem]'>Hospital Phone No.</label>
                        <input
                          type={"tel"}
                          name="hospitalPhoneNumber"
                          placeholder="Hospital Phone Number"
                          className={input.hospitalPhoneNumber.length !== 8 && touch.hospitalPhoneNumber ? inValidCSS : validCSS}
                          value={input.hospitalPhoneNumber || ""}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, hospitalPhoneNumber: true }))}
                        />
                        {input.hospitalPhoneNumber.length !== 8 && touch.hospitalPhoneNumber && <p className='text-[red] text-sm'>Please give 8 digit landline phone number</p>}
                      </div>

                      {/* Consultant Name */}
                      <div className='mb-[.8rem]'>
                        <label className='block mb-[.2rem]'>Name Of Consultant</label>
                        <input
                          type={"text"}
                          placeholder="Consultant Name"
                          className={input.consultantName.trim() === "" && touch.consultantName ? inValidCSS : validCSS}
                          value={input.consultantName || ""}
                          name={"consultantName"}
                          onChange={changeHandler}
                          onBlur={() => setTouch(event => ({ ...event, consultantName: true }))}
                        />
                        {input.consultantName.trim() === "" && touch.consultantName && <p className='text-[red] text-sm'>Please give Consultant name</p>}
                      </div>

                      <div className='mb-[.5rem]' onBlur={() => setTouch(event => ({ ...event, dateOfReceivingBlood: true }))}
                      >
                        <label className='block mb-[.2rem]'>Date of Receiving Blood</label>
                        <Datepicker
                          selected={input?.dateOfReceivingBlood}
                          className={validCSS}
                          minDate={new Date()}
                          onChange={(date) => setInput(values => ({ ...values, dateOfReceivingBlood: date }))}
                          filterDate={date => date.getDay() !== 0}
                          fixedHeight
                        />
                        {/* {input?.dateOfReceivingBlood?.length === 0 && touch.dateOfReceivingBlood && <p className='text-[red] text-sm'>Please give order date for reciving blood </p>} */}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between flex-col-reverse lg:flex-row gap-[.5rem] mt-[.5rem]'>
                    <button
                      className='bg-[black] text-[#fff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded'
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/request");
                      }}
                    >Back</button>
                    <button
                      onClick={submitHandler}
                      disabled={responseData.loading}
                      className='bg-[black] text-[#ffff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded'
                    >
                      {responseData.loading && <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>}
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
  )
}

export default RequestForm