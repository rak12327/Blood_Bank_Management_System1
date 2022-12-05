import { Alert } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeALert } from "../Redux/Model/AlertSlice";
import Bell from "./Icons/Bell";
import Success from "./Icons/Success";
import Warning from "./Icons/Warning";

export default function Toster() {

    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    if (alert.alertOpen) {
        setTimeout(() => {
            dispatch(closeALert())
        }, 5000);
        clearTimeout()
    }


    return (
        <div className="w-[100%] z-50 fixed lg:top-[.5rem] top-[1rem]">
            <Alert
                show={alert.alertOpen}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
                dismissible={{
                    onClose: () => dispatch(closeALert()),
                }}
                color={alert.color || "green"}
                className={"lg:w-[50%] w-[95%] text-sm lg:text-lg absolute right-0 flex flex-row"}
            >
                {alert.color === "green" && <Success />}
                {alert.color === "red" && <Warning />}
                {alert.color === "yellow" && <Bell />}
                {alert.message || "Somthing went wrong, try again later"}
            </Alert>
        </div>
    );
}