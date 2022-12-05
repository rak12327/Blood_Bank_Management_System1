import React from 'react'
import { Outlet } from 'react-router-dom'
import BloodRequestListNavbar from './RequestList/NavBar'

const RequestOrder = () => {



  return (
    <div className='w-[100%] basis-[70%] pl-[1rem]'>
      <BloodRequestListNavbar />

      <Outlet />
    </div>
  )
}

export default RequestOrder