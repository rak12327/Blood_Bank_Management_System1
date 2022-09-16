import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { forgotPasswordLink } from "../../API/Api";
import { openAlert } from "../AlertSlice";

export const ForgotPasswordThunk = createAsyncThunk(forgotPasswordLink, async ({ email, dispatch }, { rejectWithValue }) => {
    console.log({ email })
    try {
        const response = await Api.post(forgotPasswordLink, { email })
        dispatch(openAlert({ color: "green", message: `Reset password email sent to your ${email} email address` }));

        return response;
    } catch (error) {
        dispatch(openAlert({ color: "red", message: "Something went wrong" }))
        console.log(error.response.error.message)
        return rejectWithValue(error)
    }
})

const forgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(ForgotPasswordThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(ForgotPasswordThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(ForgotPasswordThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        })
    }
})

export default forgotPasswordSlice.reducer