import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { emailValid, inValidCSS, validCSS } from '../../Export';
import Loading from '../../Export/Icons/Loading';
import { openAlert } from '../../Redux/Model/AlertSlice';
import { ForgotPasswordThunk } from '../../Redux/Authentication/ForgotPasswordSlice';





const ForgotPassword = () => {

    const [input, setInput] = useState("")
    const [touch, setTouch] = useState(false)
    const dispatch = useDispatch();
    const userData = useSelector(state => state.forgotPassword)

    const submitHandler = e => {
        e.preventDefault()

        if (emailValid(input)) {
            dispatch(ForgotPasswordThunk({ email: input, dispatch }))
            setInput("")
            setTouch(false)
        } else {
            dispatch(openAlert({ color: "yellow", message: "Please enter valid email address" }))
            setTouch(true)
        }
    }
    return (
        <div className='bg-[red] h-[100vh]'>
            <div className='max-w-[1300px] m-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]'>
                <div className='flex items-center justify-center h-[90vh]'>
                    <div className='lg:w-[40%] w-[100%] p-[1rem] bg-[#fff] rounded'>
                        <form>
                            <div className='mb-[1rem]'>
                                <label className='mb-[.2rem] block'>Register Email ID</label>
                                <input
                                    type={"text"}
                                    className={!emailValid(input) && touch ? inValidCSS : validCSS}
                                    onChange={(e) => setInput(e.target.value)}
                                    onBlur={() => setTouch(true)}
                                    value={input}
                                />
                                {!emailValid(input) && touch && <p className='text-[red] text-sm'>Please enter email id</p>}
                            </div>
                            <button
                                onClick={submitHandler}
                                className="w-[100%] text-center bg-[black] text-[#fff] text-md py-[.5rem] rounded"
                            >
                                {userData.loading && <Loading width={"1rem"} height={"1rem"} />}
                                Submit</button>
                        </form>

                        <div className='w-[100%] text-center mt-[.5rem]'>
                            <span>Remember <Link to='/sign-in' className='underline text-blue-600' >Password</Link> ?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

