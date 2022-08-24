import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { inValidCSS, validCSS } from '../../Export';


const ForgotPassword = () => {

    const [input, setInput] = useState("")
    const [touch, setTouch] = useState(false)


    const submitHandler = e => {
        e.preventDefault()

        if (input.trim() !== "") {
            console.log(input);
            setInput("")
            setTouch(false)
        } else {
            setTouch(true)
        }
    }
    return (
        <div className='bg-[red] h-[100vh]'>
            <div className='max-w-[1300px] m-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]'>
                <div className='flex items-center justify-center h-[90vh]'>
                    <div className='w-[30%] p-[1rem] bg-[#fff] rounded'>
                        <form>
                            <div className='mb-[1rem]'>
                                <label className='mb-[.2rem] block'>Register Email ID</label>
                                <input
                                    type={"text"}
                                    className={input.trim() === "" && touch ? inValidCSS : validCSS}
                                    onChange={(e) => setInput(e.target.value)}
                                    onBlur={() => setTouch(true)}
                                    value={input}
                                />
                                {input.trim() === "" && touch && <p className='text-[red] text-sm'>Please enter email id</p>}
                            </div>
                            <button
                                onClick={submitHandler}
                                className="w-[100%] text-center bg-[black] text-[#fff] text-md py-[.5rem] rounded"
                            >Submit</button>
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