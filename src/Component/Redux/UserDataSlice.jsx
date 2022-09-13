import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { userLink } from "../API/Api";
import { openAlert } from "./AlertSlice";

export const UserDataThunk = createAsyncThunk('userData', async ({ token, dispatch, navigate }, { rejectWithValue }) => {

    try {
        const response = await Api.get(userLink, { headers: { Authorization: "Bearer " + token } })
        return response
    } catch (error) {
        dispatch(openAlert({ message: error?.response?.data?.message ? error?.response?.data?.error?.message === "invalid signature" ? "Your Account can't dedected, Please log in again!!" : error?.response?.data?.error?.message === "jwt expired" ? "Opps, Your session is expired. Please login again..." : error?.response?.data?.message : "Something went wrong with network site, Please try again late", color: "red" }))

        console.log(error?.response?.data?.message);
        if (error?.response?.data?.message === "Please log in again!!!") {
            navigate('/sign-in')
        }
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
    reducers: {
        deleteUserData(state, action) {
            state.user = null
        }
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

export const { deleteUserData } = UserDataSlice.actions;

export default UserDataSlice.reducer;