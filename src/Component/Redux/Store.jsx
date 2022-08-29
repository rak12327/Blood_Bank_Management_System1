import { configureStore } from "@reduxjs/toolkit";
import AlertSlice from "./AlertSlice";
import ContactUsSlice from "./ContactUsSlice";
import RequestFormSlice from "./RequestFormSlice";
import RequestModel from "./RequestModel";


const Store = configureStore({
    reducer: { requestModel: RequestModel, contactUsForm: ContactUsSlice, requestForm: RequestFormSlice, alert: AlertSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default Store;