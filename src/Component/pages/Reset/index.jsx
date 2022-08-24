import React from 'react'
import { useState } from 'react'
import { inValidCSS, validCSS } from '../../Export'

const ResetPassword = () => {

    const [input, setInput] = useState({ newPassword: '', ConfirmPassword: '' })
    const [touch, setTouch] = useState({ newPassword: false, ConfirmPassword: false })

    const changeHandler = (e) => {
        setInput(event => ({
            ...event, [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (input) {
            setTouch({ newPassword: false, ConfirmPassword: false })
            setInput({ newPassword: '', ConfirmPassword: '' })
            console.log(input)
        } else {
            setTouch({ newPassword: true, ConfirmPassword: true })
        }
    }
    return (
        <div className="bg-[red] h-[100vh]">
            <div className='max-w-[1300px] mx-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]'>
                <div className='flex items-center justify-center h-[90vh]'>
                    <div className='w-[30%] p-[1rem] bg-[#fff] rounded'>
                        <form>
                            <div className='mb-[.5rem]'>
                                <label className='block mb-[.2rem]'>New Password</label>
                                <input
                                    placeholder='Your new password'
                                    name='newPassword'
                                    type={"password"}
                                    value={input.newPassword}
                                    onChange={changeHandler}
                                    onBlur={() => setTouch({ newPassword: true })}
                                    className={input.newPassword?.trim() === "" && touch.newPassword ? inValidCSS : validCSS}
                                />
                                {input.newPassword?.trim() === "" && touch.newPassword && <p className='text-[red] text-sm'>Please enter your new password</p>}
                            </div>
                            <div className='mb-[0.5rem]'>
                                <label className='block mb-[.2rem]'>Confirm New Password</label>
                                <input
                                    placeholder='Confirm your new password'
                                    name='confirmNewPassword'
                                    type={"password"}
                                    value={input.confirmNewPassword}
                                    onChange={changeHandler}
                                    onBlur={() => setTouch({ confirmNewPassword: true })}
                                    className={input.confirmNewPassword?.trim() === "" && touch.confirmNewPassword ? inValidCSS : validCSS}
                                />
                                {input.confirmNewPassword?.trim() === "" && touch.confirmNewPassword && <p className='text-[red] text-sm'>Please enter your confirm new password</p>}
                            </div>

                            <button onClick={submitHandler} className="w-[100%] mt-[.5rem] bg-[black] text-[#fff] text-md py-[.5rem] rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword