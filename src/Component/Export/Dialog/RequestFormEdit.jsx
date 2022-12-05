import { Fragment, useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, inValidCSS, validCSS } from "..";
import Datepicker from "react-datepicker"
import { closeForm } from "../../Redux/Model/DailogHandlerSlice";
import { UpdatedRequestList } from "../../Redux/Request/RequestFromThunk";


export const RequestFormEdit = () => {

    const open = useSelector(state => state?.dailog?.id)


    const [touch, setTouch] = useState({ patientName: false, age: false, gender: false, hospitalName: false, hospitalPhoneNumber: false, consultantName: false, dateOfReceivingBlood: false })
    const [input, setInput] = useState({ patientName: "", age: "", gender: "", hospitalName: "", hospitalPhoneNumber: "", consultantName: "", dateOfReceivingBlood: null })

    const changeHandler = e => {
        setInput(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(closeForm())
    }

    const handleOpenForm = (e) => {
        e.preventDefault();

        if (input) {
            dispatch(UpdatedRequestList({ dispatch, id: open, input }))
        }
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
                <DialogHeader>Blood Order</DialogHeader>
                <DialogBody divider className="block max-h-[30rem] overflow-x-hidden overflow-y-auto">
                    {/* ----------Patient Name---------- */}
                    <div className='mb-[.5rem] text-[#000]'>
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
                            className={input.hospitalPhoneNumber.length < 8 && touch.hospitalPhoneNumber ? inValidCSS : validCSS}
                            value={input.hospitalPhoneNumber || ""}
                            onChange={changeHandler}
                            maxLength={10}
                            onBlur={() => setTouch(event => ({ ...event, hospitalPhoneNumber: true }))}
                        />
                        {input.hospitalPhoneNumber.length < 8 && touch.hospitalPhoneNumber && <p className='text-[red] text-sm'>Please give 8 digit landline phone number</p>}
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
                            className={!input.dateOfReceivingBlood && touch.dateOfReceivingBlood ? inValidCSS : validCSS}
                            minDate={new Date()}
                            onChange={(date) => setInput(values => ({ ...values, dateOfReceivingBlood: date }))}
                            filterDate={date => date.getDay() !== 0}
                            fixedHeight
                            placeholderText={formatDate(new Date)}
                        />
                        {!input.dateOfReceivingBlood && touch.dateOfReceivingBlood && <p className='text-[red] text-sm'>Please give order date for reciving blood </p>}
                    </div>
                    {/* </div> */}
                </DialogBody>
                <DialogFooter className="flex items-center justify-between">
                    <button
                        onClick={handleOpen}
                        className="bg-[black] text-sm text-[#fff] font-normal px-[1rem] py-[.5rem] rounded"
                    >
                        <span>Cancel</span>
                    </button>
                    <button className="bg-[black] text-sm font-normal px-[1rem] py-[.5rem] text-[#fff] rounded" onClick={handleOpenForm}>
                        <span>Confirm</span>
                    </button>
                </DialogFooter>

            </Dialog>
        </Fragment>
    );
}