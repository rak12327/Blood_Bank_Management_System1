import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { resetPasswordLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const ResetPasswordThunk = createAsyncThunk(resetPasswordLink, async ({ value, token, dispatch, navigate }, { rejectWithValue }) => {
    try {
        const response = await Api.patch(`${resetPasswordLink}/${token}`, value);
        await dispatch(openAlert({ color: "green", message: "Your password have been changed, Please login again" }));
        await navigate("/sign-in")
        console.log(response)
        return response;
    } catch (error) {
        console.log(error.response)
        if (error?.response && error?.response?.data?.message) {
            dispatch(openAlert({ color: "red", message: error?.response?.data?.message ? error?.response?.data?.message : "Somthing went wrong" }))
        }

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
    reducers: {
        clearResetPasswordData(state, action) {
            state.loading = false;
            state.data = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ResetPasswordThunk.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(ResetPasswordThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null
        });
        builder.addCase(ResetPasswordThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.data = null
        })
    }
})

export const { clearResetPasswordData } = resetPasswordSlice.actions

export default resetPasswordSlice.reducer;