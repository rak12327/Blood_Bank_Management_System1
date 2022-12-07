import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import DeleteConformation from '../../Export/DeleteConformation'
import NavBar from '../Home/NavBar'
import { AiOutlineUser } from "react-icons/ai";
import { BsBucket } from "react-icons/bs"

const Profile = () => {

    const open = useSelector(state => state.dailog.openDailog)

    return (
        <div className='bg-[red] min-h-[100vh] h-auto'>
            {open && <DeleteConformation />}
            <NavBar />
            <div className='mainDiv'>
                {/* max-h-[32rem] */}
                <div className='bg-[#fff] max-w-[1000px] m-auto rounded lg:min-h-[32rem] h-auto p-4'>
                    <div className='flex items-start gap-4 flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-500'>
                        <div className="flex overflow-hidden rounded-lg bg-white w-full lg:w-auto">
                            <div className="flex w-full">
                                <div className="flex flex-col lg:w-80 w-full">
                                    <div className="flex flex-col gap-4 pt-5">
                                        <div className="center px-4">
                                            <img className="rounded-full h-40 w-40 object-cover" src="/assets/ContactUs.jpg" alt="" />
                                        </div>
                                        {/* lg:h-[10rem] */}
                                        <div className="flex items-center h-full mt-5">
                                            <nav className="flex-1 bg-neutral-800">
                                                <ul className='grid  grid-cols-2 lg:grid-cols-none divide-x divide-black lg:divide-none lg:gap-4'>
                                                    <li className='flex justify-center'>
                                                        <Link to="/profile/user" className="navbarLink text-neutral-200" >
                                                            <AiOutlineUser />
                                                            <span className="">User</span>
                                                        </Link>
                                                    </li>
                                                    <li className='flex justify-center'>
                                                        <Link to="/profile/request-order-list/request-list" className="navbarLink text-neutral-200">
                                                            <BsBucket />
                                                            <span className="">Order</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
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
    )
}

export default Profile