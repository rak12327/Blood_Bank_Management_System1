import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Home/NavBar'

const Profile = () => {


    return (
        <div className='bg-[red] min-h-[100vh] h-[100%]'>
            <NavBar />
            <div className='max-w-[1300px] mx-auto px-[1rem] py-[1rem]'>
                <div className='flex items-center justify-center'>

                    <div className='bg-[#fff] max-w-[1000px] m-auto rounded w-[100%] relative min-h-[75vh] h-[100%] p-[1rem]'>
                        <div className='flex items-start justify-between gap-[1rem] flex-col lg:flex-row w-[100%] h-[100%] lg:divide-x'>
                            <div className="flex  overflow-hidden  rounded-lg bg-[#fff] w-[100%] lg:w-auto">
                                <div className="flex md:flex-shrink-0 w-[100%]">
                                    <div className="flex flex-col lg:w-[20rem] w-[100%]">
                                        <div className="flex flex-col flex-grow pt-5">
                                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                                <div>
                                                    <img className="inline-block rounded-full h-[10rem] w-[10rem] object-cover" src="/assets/ContactUs.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="flex items-center lg:min-h-[35vh] h-[100%] px-4 mt-5">
                                                <nav className="flex-1 space-y-1 bg-neutral-800">
                                                    <ul className='flex flex-row lg:flex-col justify-around'>
                                                        <li>
                                                            <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900" href="/profile">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                                </svg>
                                                                <span className="ml-4">User</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900" href="/request-oder-list">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                </svg>
                                                                <span className="ml-4">Settings</span></a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="hidden lg:flex flex-shrink-0 p-4 px-4 bg-neutral-900 absolute bottom-0 text-center">
                                                <a href="/" className="flex-shrink-0 block w-full group">
                                                    <div className="flex items-center">
                                                        <p>Version 1.0</p>
                                                    </div>
                                                </a>
                                            </div>
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