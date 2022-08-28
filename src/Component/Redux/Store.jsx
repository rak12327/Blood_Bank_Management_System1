import { configureStore } from "@reduxjs/toolkit";
import ContactUsSlice from "./ContactUsSlice";
import RequestModel from "./RequestModel";


const Store = configureStore({
    reducer: { requestModel: RequestModel, contactUsForm: ContactUsSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default Store;