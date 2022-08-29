import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../API/Api";
import { openAlert } from "./AlertSlice";

export const requestFormThunk = createAsyncThunk("request-form", async ({ formData, dispatch, navigate }, { rejectWithValue }) => {
    try {
        const response = await Api.post("/api/v1/request-form", formData)
        navigate("/request")
        dispatch(openAlert({ message: "your response was succussfully submited", color: "green" }))
        return response;
    } catch (error) {
        return rejectWithValue({ error, message: "Opps there seems to be an error" })
    }
})

const RequestFormSlice = createSlice({
    name: "requestForm",
    initialState: {
        loading: false,
        error: "",
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(requestFormThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(requestFormThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(requestFormThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default RequestFormSlice.reducer;