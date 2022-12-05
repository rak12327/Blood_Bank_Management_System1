import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { forgotPasswordLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const ForgotPasswordThunk = createAsyncThunk(forgotPasswordLink, async ({ email, dispatch }, { rejectWithValue }) => {
    try {
        const response = await Api.post(forgotPasswordLink, { email })
        await dispatch(openAlert({ color: "green", message: `Reset password email sent to your ${email} email address` }));

        return response;
    } catch (error) {
        dispatch(openAlert({ color: "red", message: error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong" }))
        console.log(error?.response?.data)
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
    reducers: {
        clearForgotPasswordData(state, action) {
            state.loading = false;
            state.data = null;
            state.error = null;
        }
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

export const { clearForgotPasswordData } = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer