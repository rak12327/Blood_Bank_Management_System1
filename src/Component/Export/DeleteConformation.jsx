import React from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { dailogHandler } from '../Redux/DailogHandlerSlice';
import { useNavigate } from 'react-router-dom';
import { DeleteAccountThunk } from '../Redux/DeleteAccountSlice';

const DeleteConformation = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const open = useSelector(state => state.dailog.openDailog)
    const userData = useSelector(state => state.user)

    const submitHandler = e => {
        e.preventDefault()
        if (userData?.user?.data?._id) {
            dispatch(DeleteAccountThunk({ id: userData?.user?.data?._id, dispatch, navigate }))
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                handler={() => dispatch(dailogHandler())}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="min-w-[90%] lg:min-w-[50%] w-[100%]"
            >
                <DialogHeader
                    className='text-[red]'
                >
                    Delete Account
                </DialogHeader>
                <DialogBody divider className='block'>
                    <h1 className="text-[black] text-lg font-semibold">
                        Are you sure, you want to delete you account?
                    </h1>
                    <Typography className="">
                        If you you want to delete your account, you'll permanently remove from our system. You can't get your information back.
                    </Typography>
                </DialogBody>
                <DialogFooter className='flex items-center justify-between'>
                    <button
                        className='bg-[black] text-sm text-[#fff] px-[1rem] py-[.5rem] rounded'
                        onClick={() => dispatch(dailogHandler())}
                    >Black</button>
                    <button
                        className='bg-[black] text-sm text-[#fff] px-[1rem] py-[.5rem] rounded'
                        onClick={submitHandler}
                    >Yes, Delete my account</button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default DeleteConformation
