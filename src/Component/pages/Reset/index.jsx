import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { inValidCSS, validCSS } from '../../Export'
import Loading from '../../Export/Icons/Loading'
import { openAlert } from '../../Redux/Model/AlertSlice'
import { ResetPasswordThunk } from '../../Redux/Authentication/ResetPasswordSlice'

const ResetPassword = () => {

    const [value, setValue] = useState({ newPassword: '', confirmPassword: '' })
    const [touch, setTouch] = useState({ newPassword: false, confirmPassword: false })

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state => state.resetPassword);

    const changeHandler = (e) => {
        setValue(event => ({
            ...event, [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (value.newPassword.trim() === "" || value.confirmPassword.trim() === "") {
            setTouch({ newPassword: true, confirmPassword: true })
            return dispatch(openAlert({ color: "yellow", message: "Please enter your new password and confirm password" }))
        }
        else if (!value.newPassword.length > 8 || !value.confirmPassword.length > 8) {
            return dispatch(openAlert({ color: "yellow", message: "Please enter your 8 digit new password and confirm password" }))
        }
        else if (value.newPassword !== value.confirmPassword) {
            return dispatch(openAlert({ color: "yellow", message: "Please enter your new password and confirm password does not match" }))
        }
        else {
            setTouch({ newPassword: false, confirmPassword: false })
            setValue({ newPassword: '', confirmPassword: '' })
            return dispatch(ResetPasswordThunk({ value, dispatch, navigate, token: params?.token }))
        }

    }
    return (
        <div className="bg-[red] h-[100vh]">
            <div className='max-w-[1300px] mx-auto h-[100%] px-[1rem] lg:px-[2rem] py-[1.5rem]'>
                <div className='flex items-center justify-center h-[90vh]'>
                    <div className='lg:w-[40%] w-[100%] p-[1rem] bg-[#fff] rounded'>
                        <form>
                            <div className='mb-[.5rem]'>
                                <label className='block mb-[.2rem]'>New Password</label>
                                <input
                                    placeholder='Your new password'
                                    name='newPassword'
                                    type={"password"}
                                    value={value.newPassword}
                                    onChange={changeHandler}
                                    onBlur={() => setTouch({ newPassword: true })}
                                    className={value.newPassword?.length < 8 && touch.newPassword ? inValidCSS : validCSS}
                                />
                                {value.newPassword?.length < 8 && touch.newPassword && <p className='text-[red] text-sm'>Please enter your 8 digit new password</p>}
                            </div>
                            <div className='mb-[0.5rem]'>
                                <label className='block mb-[.2rem]'>Confirm New Password</label>
                                <input
                                    placeholder='Confirm your new password'
                                    name='confirmPassword'
                                    type={"password"}
                                    value={value.confirmPassword}
                                    onChange={changeHandler}
                                    onBlur={() => setTouch({ confirmPassword: true })}
                                    className={value.confirmPassword?.length < 8 && touch.confirmPassword ? inValidCSS : validCSS}
                                />
                                {value.confirmPassword?.length < 8 && touch.confirmPassword && <p className='text-[red] text-sm'>Please enter your 8 digit confirm password</p>}
                            </div>

                            <button onClick={submitHandler} className="w-[100%] mt-[.5rem] bg-[black] text-[#fff] text-md py-[.5rem] rounded">
                                {userData?.loading && <Loading width={"1rem"} height={"1rem"} />}
                                Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword