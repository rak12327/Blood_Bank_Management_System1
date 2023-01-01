import { configureStore } from "@reduxjs/toolkit";
import AlertSlice from "./Model/AlertSlice";
import ChangePasswordSlice from "./Authentication/ChangePasswordSlice";
import ContactUsSlice from "./Contact/ContactUsSlice";
import DailogHandlerSlice from "./Model/DailogHandlerSlice";
import RequestFormSlice from "./Request/RequestFormSlice";
import RequestModel from "./Model/RequestModel";
import SignInSlice from "./Authentication/SignInSlice";
import UpdateSlice from "./Authentication/UpdateSlice";
import UserDataSlice from "./Authentication/UserDataSlice";
import SignUpSlice from "./Authentication/SignUpSlice";
import DeleteAccountSlice from "./Authentication/DeleteAccountSlice";
import RequestFormListSlice from "./Request/RequestFormListSlice";
import ComponentNameSlice from "./Request/ComopentNameSlice";
import BloodDetailsSlice from "./Request/BloodDetailsSlice";
import AuthSlice from "./Authentication/AuthSlice";

const Store = configureStore({
  reducer: {
    requestModel: RequestModel,
    contactUsForm: ContactUsSlice,
    requestForm: RequestFormSlice,
    alert: AlertSlice,
    signup: SignUpSlice,
    signin: SignInSlice,
    user: UserDataSlice,
    update: UpdateSlice,
    changePassword: ChangePasswordSlice,
    dailog: DailogHandlerSlice,

    auth: AuthSlice,
    deleteAccount: DeleteAccountSlice,
    requestList: RequestFormListSlice,
    componentName: ComponentNameSlice,
    bloodDetails: BloodDetailsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
