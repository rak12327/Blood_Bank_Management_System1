import { createSlice } from "@reduxjs/toolkit";
import { RequestFormListBeforeDeliver, RequestFormListComplete } from "./RequestFromThunk";

const RequestFormListSlice = createSlice({
    name: "requestFormList",
    initialState: {
        loading: false,
        error: null,
        requestList: null,
        completeList: [],
        notCompleteList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RequestFormListBeforeDeliver.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(RequestFormListBeforeDeliver.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.requestList = action.payload
        })
        builder.addCase(RequestFormListBeforeDeliver.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            // state.requestList = null
        })
        builder.addCase(RequestFormListComplete.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(RequestFormListComplete.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.completeList = action.payload;
        })
        builder.addCase(RequestFormListComplete.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            // state.completeList = null
        })
    }
})

export default RequestFormListSlice.reducer;