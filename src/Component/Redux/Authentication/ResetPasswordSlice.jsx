import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { resetPasswordLink } from "../../API/Api";
import { openAlert } from "../AlertSlice";

export const ResetPasswordThunk = createAsyncThunk(resetPasswordLink, async ({ value, token, dispatch, navigate }, { rejectWithValue }) => {
    try {
        const response = await Api.patch(`${resetPasswordLink}/${token}`, value);
        dispatch(openAlert({ color: "green", message: "Your password have been changed, Please login again" }));
        return response;
    } catch (error) {
        dispatch(openAlert({ color: "red", message: "Somthing went wrong" }))
        console.log(error.response)
        return rejectWithValue(error)
    }
})

const resetPasswordSlice = createSlice({
    name: "restPassword",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(ResetPasswordThunk.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(ResetPasswordThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(ResetPasswordThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default resetPasswordSlice.reducer;