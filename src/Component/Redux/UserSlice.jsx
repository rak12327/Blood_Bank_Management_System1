import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../API/Api";
import { openAlert } from "./AlertSlice";

export const UserSliceThunk = createAsyncThunk('userAuth', async ({ value, dispatch, navigate, state }, { rejectWithValue }) => {

    const signUpLink = '/api/v1/signup'
    try {
        const response = await Api.post(signUpLink, value);
        dispatch(openAlert({ message: `Welcome ${value.name}`, color: "green" }))
        localStorage.setItem("token", JSON.stringify(response?.data?.token))
        navigate(state?.path || "/")
        return response;
    } catch (error) {
        dispatch(openAlert({ message: error.message === "Network Error" || error?.response?.data?.message === `Can't find ${signUpLink} on this server!` ? "Something went wrong, Please try again later" : error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong, please try again", color: "red" }))
        return rejectWithValue({ error, message: "Somthing went wrong!!!" });
    }
})


const UserSlice = createSlice({
    name: 'userSlice',
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    extraReducers: {
        [UserSliceThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [UserSliceThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [UserSliceThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
});

export default UserSlice.reducer;