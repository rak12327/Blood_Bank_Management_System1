import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { requestFormLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";
import { clearModelData } from "../Model/RequestModel";

export const requestFormThunk = createAsyncThunk("request-form", async ({ input, dispatch, navigate, token }, { rejectWithValue }) => {

    console.log(token);
    try {
        const response = await Api.post(requestFormLink, input, {
            headers: {
                Authorization: `Bearer ` + token
            }
        })
        await dispatch(openAlert({ message: "your response was succussfully submited", color: "green" }))
        await navigate("/request")
        console.log(response)
        await dispatch(clearModelData())
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            rejectWithValue(error.response.data)
        } else {
            await dispatch(openAlert({ message: "Something went wrong, Please try again later", color: "red" }))
            return rejectWithValue({ error, message: "Opps there seems to be an error" })
        }
        dispatch(clearModelData())
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