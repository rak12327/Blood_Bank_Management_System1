import { Alert } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeALert } from "../Redux/AlertSlice";

export default function Toster() {

    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    if (alert.alertOpen) {
        setTimeout(() => {
            dispatch(closeALert())
        }, 5000);
        // clearTimeout()
    }


    return (
        <div className="w-[100%] relative z-50">
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
                className={"w-[50%] absolute right-0"}
            >
                {alert.message || "Somthing went wrong"}
            </Alert>
        </div>
    );
}