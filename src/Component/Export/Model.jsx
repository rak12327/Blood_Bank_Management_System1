import { Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export const Model = ({ open, handleOpen }) => {


    return (
        <Fragment>

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody divider>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
                    reprehenderit omnis perspiciatis aut odit! Unde architecto
                    perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
                    praesentium magni corrupti explicabo!
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}