import React from 'react'
import { useState } from 'react'
import NavBar from '../Home/NavBar'

const Profile = () => {

    const [updateAcc, setUpdateAcc] = useState(false)
    const [value, setValue] = useState({ name: "Rohit", email: "rohitpramanik30593@gmail.com" })
    // const [spinner, setSpinner] = useState(false)


    const submitHandler = () => {
        // setSpinner(true)
        console.log(value)
        setTimeout(() => {
            // setSpinner(false)
            setUpdateAcc(false)
        }, 5000)
    }
    return (
        <div className='bg-[red] h-[100vh]'>
            <NavBar />
            <div className='max-w-[1300px] mx-auto px-[1rem] py-[2rem]'>
                <div className='flex items-center justify-center min-h-[75vh] h-[100%]'>
                    <div className='max-w-[900px] w-[100%] p-[1rem] bg-[#fff] rounded h-[100%]'>
                        <div className='flex items-start justify-around gap-[1rem] flex-col lg:flex-row h-[100%] lg:divide-x'>
                            <div className='flex top-0 justify-center p-[1rem] lg:basis-[30%] w-[100%] h-[100%]'>
                                <div className='bg-[purple] bg-neutral-focus text-[#fff] rounded-[100%] w-[4.5rem] text-center hover:ring-2 ring-offset-white'>
                                    <span className='text-[3rem]'>R</span>
                                </div>
                            </div>
                            <div className='lg:basis-[60%] w-[100%] pl-[1rem]'>
                                <div className='mb-[.5rem]'>
                                    <label className='block mb-[.2rem]'>Name</label>
                                    <input
                                        placeholder='Your Name'
                                        type={"text"}
                                        value={value.name}
                                        disabled={!updateAcc}
                                        onChange={updateAcc ? (e) => setValue({ name: e.target.value }) : () => setValue({ name: value.name })}
                                        className='px-[.5rem] py-[.4rem] w-[100%] text-sm' />
                                </div>
                                <div className='mb-[.5rem]'>
                                    <label className='block mb-[.2rem]'>Email</label>
                                    <input
                                        placeholder='Your Email'
                                        value={value.email}
                                        disabled={!updateAcc}
                                        onChange={updateAcc ? (e) => setValue({ email: e.target.value }) : () => setValue({ email: value.email })}
                                        type='email'
                                        className='px-[.5rem] py-[.4rem] w-[100%] text-sm' />
                                </div>
                                <div className='mb-[.5rem] mt-[5rem]'>
                                    <div className='flex items-start justify-between gap-[.5rem] flex-col lg:flex-row'>
                                        {!updateAcc && <button className='bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded'>Log out</button>}
                                        {!updateAcc && <button className='bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded'>Reset Password</button>}
                                        {!updateAcc ?
                                            <button className='bg-[black] w-full lg:w-auto px-[1rem] py-[.4rem] text-[#fff] text-sm rounded' onClick={() => setUpdateAcc(true)}>

                                                Update Account</button>
                                            :
                                            <button className='bg-[black] w-full lg:w-auto text-[#fff] px-[1rem] py-[.4rem] text-sm rounded' onClick={submitHandler}>
                                                Submit</button>}
                                        {!updateAcc && <button className='bg-[black] lg:w-auto w-full px-[1rem] py-[.4rem] text-[#fff] text-sm rounded'>Delete Account</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile