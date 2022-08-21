import React from 'react'
import { useState } from 'react'
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const RequestForm = () => {

  // const [startDate, setStartDate] = useState(null);
  const [touch, setTouch] = useState({ name: false, phoneNumber: false, adhaarNumber: false, address: false, pinCode: false, patientName: false, age: false, gender: false, hospitalName: false, hospitalPhoneNumber: false, consultantName: false, dateOfReceivingBlood: false })
  const [input, setInput] = useState({ name: "", phoneNumber: "", adhaarNumber: "", address: "", pinCode: "", patientName: "", age: "", gender: "", hospitalName: "", hospitalPhoneNumber: "", consultantName: "", dateOfReceivingBlood: "" })

  const validCSS = 'w-[100%] px-[.5rem] py-[.4rem] text-sm rounded outline-none focus:bg-sky-50 hover:bg-sky-50'
  const inValidCSS = 'w-[100%] px-[.5rem] py-[.4rem] text-sm border-[red] rounded outline-none focus:bg-sky-50 hover:bg-sky-50'

  const changeHandler = e => {
    setInput(values => ({ ...values, [e.target.name]: e.target.value }))
  }


  console.log(input)
  console.log(touch);
  console.log(input?.dateOfReceivingBlood)
  const submitHandler = e => {
    e.preventDefault()

    if (input.name?.length >= 4 && input.phoneNumber?.length >= 10) {
      console.log(input);
      setTouch({ name: false, phoneNumber: false, adhaarNumber: false, address: false, pinCode: false, patientName: false, age: false, gender: false, hospitalName: false, hospitalPhoneNumber: false, consultantName: false, dateOfReceivingBlood: false })
      setInput({ name: "", phoneNumber: "", adhaarNumber: "", address: "", pinCode: "", patientName: "", age: "", gender: "", hospitalName: "", hospitalPhoneNumber: "", consultantName: "", dateOfReceivingBlood: null })
    } else {
      setTouch({ name: true, phoneNumber: true, adhaarNumber: true, address: true, pinCode: true, patientName: true, age: true, gender: true, hospitalName: true, hospitalPhoneNumber: true, consultantName: true, dateOfReceivingBlood: true })
    }
  }

  return (
    <div className='bg-[red] h-[100vh]'>
      <div className='max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]'>
        <div className='flex items-center justify-center h-[90vh]'>
          <div className='max-w-[900px] w-[100%]'>
            <div className='bg-[#fff] px-[1rem] py-[1.5rem]'>

              <form onSubmit={submitHandler}>
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
                        style={{ height: "6.5rem" }}
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
                            className={input.age.trim() === "" && touch.age ? inValidCSS : validCSS}
                            value={input.age || ""}
                            name="age"
                            onChange={changeHandler}
                            onBlur={() => setTouch(event => ({ ...event, age: true }))}
                          />
                          {input.age?.trim() === "" && touch.age && <p className='text-[red] text-sm'>Please enter your age, make sure your age must +18</p>}
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
                  <button className='bg-[black] text-[#fff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded'>Back</button>
                  <button className='bg-[black] text-[#ffff] w-[100%] lg:w-[10%] py-[.4rem] outline-none text-sm rounded'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestForm