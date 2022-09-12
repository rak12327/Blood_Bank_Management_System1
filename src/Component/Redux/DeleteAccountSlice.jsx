import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { deleteUserLink } from "../API/Api";
import { openAlert } from "./AlertSlice";

export const DeleteAccountThunk = createAsyncThunk(deleteUserLink, async ({ value, dispatch }, { rejectWithValue }) => {
    try {
        const response = await Api.delete(deleteUserLink, value)
        dispatch(openAlert({ color: "green", message: "Your account deleted" }));
        return response;
    } catch (error) {
        dispatch(openAlert({ message: "something went wrong, please try again later", color: "red" }))
        return rejectWithValue({ error, message: "Something went wrong form our site, please try again later" })
    }
})

const deleteAccountSlice = createSlice({
    name: "deleteAccountSlice",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteAccountThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(DeleteAccountThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(DeleteAccountThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default deleteAccountSlice.reducer;