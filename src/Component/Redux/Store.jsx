import { configureStore } from "@reduxjs/toolkit";
import RequestModel from "./RequestModel";

const Store = configureStore({
    reducer: { requestModel: RequestModel }
})

export default Store;