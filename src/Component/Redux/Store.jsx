import { configureStore } from "@reduxjs/toolkit";
import AlertSlice from "./AlertSlice";
import ChangePasswordSlice from "./ChangePasswordSlice";
import ContactUsSlice from "./ContactUsSlice";
import DailogHandlerSlice from "./DailogHandlerSlice";
import RequestFormSlice from "./RequestFormSlice";
import RequestModel from "./RequestModel";
import SignInSlice from "./SignInSlice";
import UpdateSlice from "./UpdateSlice";
import UserDataSlice from "./UserDataSlice";
import UserSlice from "./UserSlice";


const Store = configureStore({
    reducer: {
        requestModel: RequestModel,
        contactUsForm: ContactUsSlice,
        requestForm: RequestFormSlice,
        alert: AlertSlice,
        signup: UserSlice,
        signin: SignInSlice,
        user: UserDataSlice,
        update: UpdateSlice,
        changePassword: ChangePasswordSlice,
        dailog: DailogHandlerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default Store;