import { configureStore } from "@reduxjs/toolkit";
import AlertSlice from "./Model/AlertSlice";
import ContactUsSlice from "./Contact/ContactUsSlice";
import DailogHandlerSlice from "./Model/DailogHandlerSlice";
import RequestFormSlice from "./Request/RequestFormSlice";
import RequestModel from "./Model/RequestModel";
// import SignInSlice from "./Authentication/SignInSlice";
import UpdateSlice from "./Authentication/UpdateSlice";
import UserDataSlice from "./Authentication/UserDataSlice";
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
    // signin: SignInSlice,
    user: UserDataSlice,
    update: UpdateSlice,
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
