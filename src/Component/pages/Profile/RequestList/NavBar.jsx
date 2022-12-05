// import React from 'react'

import { NavLink } from "react-router-dom"
import OrderCancel from "../../../Export/Icons/OrderCancel"
import OrderComplete from "../../../Export/Icons/OrderComplete"
import OrderList from "../../../Export/Icons/OrderList"

const BloodRequestListNavbar = () => {
    return (
        <div className='w-[100%] h-[2rem] bg-[#fff] '>
            <div className='w-[100%] p-[1rem] h-[2rem] border-b-2'>
                <ul className='h-[100%] flex items-center justify-around flex-row'>
                    <li>
                        <NavLink to={"/profile/request-order-list/request-list"} className="flex flex-row items-center gap-2">
                            <OrderList />
                            <p>
                                Order list
                            </p>
                        </NavLink>
                    </li>
                    <li  >
                        <NavLink to={"/profile/request-order-list/complete"} className="flex flex-row items-center gap-2">
                            <OrderComplete />
                            <p>
                                Order Completed
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/profile/request-order-list/not-complete"} className="flex flex-row items-center gap-2">
                            <OrderCancel />
                            <p>
                                Order Rejected
                            </p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BloodRequestListNavbar