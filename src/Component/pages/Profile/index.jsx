import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import DeleteConformation from '../../Export/DeleteConformation'
import Order from '../../Export/Icons/Order'
import NavBar from '../Home/NavBar'

const Profile = () => {

    const open = useSelector(state => state.dailog.openDailog)



    return (
        <div className='bg-[red] min-h-[100vh] h-auto'>
            {open && <DeleteConformation />}
            <NavBar />
            <div className='max-w-[1300px] mx-auto px-[1rem] py-[1rem]'>
                <div className='flex items-center justify-center'>
                    {/* max-h-[32rem] */}
                    <div className='bg-[#fff] max-w-[1000px] m-auto rounded w-[100%] relative  lg:max-h-[32rem] h-auto p-[1rem]'>
                        <div className='flex items-start gap-[1rem] flex-col lg:flex-row w-[100%] h-[100%] lg:divide-x'>
                            <div className="flex  overflow-hidden  rounded-lg bg-[#fff] w-[100%] lg:w-auto">
                                <div className="flex md:flex-shrink-0 w-[100%]">
                                    <div className="flex flex-col lg:w-[20rem] w-[100%]">
                                        <div className="flex flex-col flex-grow pt-5">
                                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                                <div>
                                                    <img className="inline-block rounded-full h-[10rem] w-[10rem] object-cover" src="/assets/ContactUs.jpg" alt="" />
                                                </div>
                                            </div>
                                            {/* lg:h-[10rem] */}
                                            <div className="flex items-center h-[100%] px-4 mt-5">
                                                <nav className="flex-1 space-y-1 bg-neutral-800">
                                                    <ul className='flex flex-row lg:flex-col justify-around'>
                                                        <li>
                                                            <Link className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900" to="/profile/user">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                                </svg>
                                                                <span className="ml-4">User</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900" to="/profile/request-order-list">
                                                                <Order />
                                                                <span className="ml-4">Order</span></Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            {/* <div className="hidden lg:flex flex-shrink-0 p-4 px-4 bg-neutral-900 absolute bottom-0 text-center">
                                                <a href="/" className="flex-shrink-0 block w-full group">
                                                    <div className="flex items-center">
                                                        <p>Version 1.0</p>
                                                    </div>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Outlet />


                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Profile