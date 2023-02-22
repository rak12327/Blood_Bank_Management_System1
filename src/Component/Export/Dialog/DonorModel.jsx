import React, { useState } from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Radio,
} from "@material-tailwind/react";

const DonorModel = ({ open, handleOpen, setOpen }) => {

    const [input, setInput] = useState({ address: "" })

    const value = "Dhamankar Naka, Bhiwandi, Thane, Maharashtra"
    const value2 = "Mansarover, Bhiwandi, Thane, Maharashtra"

    const changeHandler = (e) => setInput(event => ({ ...event, [e.target.name]: e.target.value }))

    const submitHandler = e => {
        e.preventDefault()
        console.log(input);
        setOpen(!open)
    }


    return (
        <div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="min-w-[90%] w-4/5"
            >
                <DialogHeader
                >
                    Blood Donation Camp
                </DialogHeader>
                <DialogBody divider>
                    <div className='flex flex-col'>
                        <Radio
                            label={value}
                            value={value}
                            onChange={changeHandler}
                            name={"address"}
                        />
                        <Radio
                            label={value2}
                            value={value2}
                            onChange={(e) => setInput(event => ({ ...event, address: e.target.value }))}
                            name="address"
                        />
                    </div>
                </DialogBody>
                <DialogFooter className='flex items-center justify-between'>
                    <button
                        className='bg-[black] text-sm text-[#fff] px-[1rem] py-[.5rem] rounded'
                        onClick={handleOpen}
                    >Black</button>
                    <button
                        className='bg-[black] text-sm text-[#fff] px-[1rem] py-[.5rem] rounded'
                        onClick={submitHandler}
                    >Submit</button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default DonorModel