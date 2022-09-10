import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { userLink } from "../API/Api";
import { openAlert } from "./AlertSlice";

export const UserDataThunk = createAsyncThunk('userData', async ({ token, dispatch }, { rejectWithValue }) => {

    try {
        const response = await Api.get(userLink, { headers: { Authorization: "Bearer " + token } })
        return response
    } catch (error) {
        dispatch(openAlert({ message: error?.response?.data?.message ? error?.response?.data?.error?.message === "invalid signature" ? "YOur Account can't dedected, Please log in again!!" : error?.response?.data?.message : "Something went wrong with network site, Please try again late", color: "red" }))


        //checking error
        return rejectWithValue(error)
    }
})

const UserDataSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(UserDataThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(UserDataThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(UserDataThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default UserDataSlice.reducer;