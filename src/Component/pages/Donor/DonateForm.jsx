import React from 'react'

const DonateForm = () => {
    return (
        <div className='bg-[red] h-[100vh]'>
            <div className='max-w-[1300px] mx-auto px-[1rem] lg:px-[2rem] py-[1rem]'>
                <div className='flex items-center justify-center h-[80vh]'>
                    <div className='bg-[#fff] px-[1rem] py-[1.5rem] rounded w-[40%]'>
                        <form>
                            <div className='mb-[.5rem]'>
                                <label className='block mb-[.2rem]'>Full Name</label>
                                <input type={"text"} placeholder='Full Name' className='w-[100%] text-sm px-[.5rem] py-[.4rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none' />
                            </div>
                            <div className='mb-[.5rem]'>
                                <label className='block mb-[.2rem]'>Adhaar Number</label>
                                <input type={"number"} placeholder="1234 5678 9012" className='w-[100%] text-sm px-[.5rem] py-[.4rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none' />
                            </div>
                            <div className='mb-[.5rem] flex items-center justify-between'>
                                <div className='w-[45%]'>
                                    <label className='block mb-[.2rem]'>Age</label>
                                    <input type={'number'} placeholder='18' className='w-[100%] text-sm px-[.5rem] py-[.4rem] rounded hover:bg-sky-50 focus:bg-sky-50 focus:outline-none' />
                                </div>
                                <div className='w-[45%]'>
                                    <label className='block mb-[.2rem]'>Gender</label>
                                    <select className='w-[100%] px-[.5rem] py-[.4rem] text-sm rounded hover:bg-sky-50'>
                                        <option value={'null'} >Select your gender</option>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateForm