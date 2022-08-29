import { Fragment } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../Redux/RequestModel";
import { useNavigate } from "react-router-dom";

export const Model = () => {

    const { openModel, requestData } = useSelector(state => state.requestModel)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOpen = () => {
        dispatch(closeModel())
    }

    const handleOpenForm = (e) => {
        e.preventDefault();

        if (requestData.unit > 0) {
            dispatch(closeModel())
            navigate("/request-form")
        }
    }


    return (
        <Fragment>
            <Dialog
                open={openModel}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="min-w-[60%] lg:min-w-[50%] w-[100%]"
            >
                <DialogHeader>Blood Order</DialogHeader>
                <DialogBody divider className="block">
                    <div className="mb-[.5rem] w-[100%]">
                        <label className="block mb-[.2rem]">Blood Name</label>
                        <input
                            type="text"
                            className="w-[100%] px-[.5rem] py-[.4rem] rounded"
                            placeholder="Blood Name"
                            value={requestData.bloodName || ""}
                            disabled={requestData.bloodName === "" ? false : true}
                        />
                    </div>
                    <div className="flex items-center justify-between gap-[1rem]">
                        <div className="mb-[.5rem] w-[100%]">
                            <label className="block mb-[.2rem]">Unit</label>
                            <input
                                type="text"
                                className="w-[100%] px-[.5rem] py-[.4rem] rounded"
                                placeholder="Unit"
                                value={requestData.unit || ""}
                                disabled={requestData.unit === "" ? false : true}
                            />
                        </div>
                        <div className="mb-[.5rem] w-[100%]">
                            <label className="block mb-[.2rem]">Price</label>
                            <input
                                type="text"
                                className="w-[100%] px-[.5rem] py-[.4rem] rounded"
                                placeholder="Amount"
                                value={requestData.price || ""}
                                disabled={requestData.price === "" ? false : true}
                            />
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter className="flex items-center justify-between">
                    <button
                        onClick={handleOpen}
                        className="bg-[black] text-sm text-[#fff] font-normal px-[1rem] py-[.5rem] rounded"
                    >
                        <span>Cancel</span>
                    </button>
                    <button className="bg-[black] text-sm font-normal px-[1rem] py-[.5rem] text-[#fff] rounded" onClick={handleOpenForm}>
                        <span>Confirm</span>
                    </button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}