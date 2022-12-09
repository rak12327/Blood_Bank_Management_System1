import { AiOutlineCheck, AiOutlineInfo } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import { BiErrorCircle } from "react-icons/bi"
import { SnackbarProvider, useSnackbar } from "notistack";
import { MdClose } from "react-icons/md";

function SnackbarCloseButton({ id }) {
    const { closeSnackbar } = useSnackbar();

    return (
        <div onClick={() => closeSnackbar(id)} className="">
            <MdClose className="text-white iconSize" />
        </div>
    );
}

const CustomSnackBarProvider = ({ children }) => (
    <SnackbarProvider
        anchorOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        iconVariant={{
            error: <BiErrorCircle className="mr-2 iconSize" />,
            info: <AiOutlineInfo className="iconSize mr-2" />,
            success: <AiOutlineCheck className="iconSize mr-2" />,
            warning: <ImWarning className="iconSize mr-2" />,
        }}
        action={(key) => <SnackbarCloseButton id={key} />}
        style={{ zIndex: "1000" }}
    >
        {children}
    </SnackbarProvider>
);

export default CustomSnackBarProvider;