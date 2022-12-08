import { Alert } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeALert } from "../Redux/Model/AlertSlice";



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
                {/* {alert.color === "green" && <Success />}
                {alert.color === "red" && <Warning />}
                {alert.color === "yellow" && <Bell />} */}
                {alert.message || "Somthing went wrong, try again later"}
            </Alert>
        </div>
    );
}

// function SnackbarCloseButton({ id }) {
//     const { closeSnackbar } = useSnackbar();

//     return (
//         <div onClick={() => closeSnackbar(id)}>
//             <GrClose />
//         </div>
//     );
// }

// const CustomSnackBarProvider = (props) => (
//     <SnackbarProvider
//         anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//         }}
//         iconVariant={{
//             error: <BiErrorCircle />,
//             info: <AiOutlineInfo />,
//             success: <AiOutlineCheck />,
//             warning: <ImWarning />,
//         }}
//         action={(key) => <SnackbarCloseButton id={key} />}
//     >
//         {props.children}
//     </SnackbarProvider>
// );

// export default CustomSnackBarProvider;