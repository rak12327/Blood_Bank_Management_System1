import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { signUpLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const SignUpSliceThunk = createAsyncThunk('userAuth', async ({ value, dispatch, navigate, state }, { rejectWithValue }) => {

    try {
        const response = await Api.post(signUpLink, value);
        await dispatch(openAlert({ message: `Welcome ${value.name}`, color: "green" }))
        localStorage.setItem("token", JSON.stringify(response?.data?.token))
        await navigate(state?.path || "/")
        return response;
    } catch (error) {
        console.log(error);
        dispatch(openAlert({ message: error.message === "Network Error" || error?.response?.data?.message === `Can't find ${signUpLink} on this server!` ? "Something went wrong from our site, Please try again later" : error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong, please try again", color: "red" }))
        return rejectWithValue({ error, message: "Somthing went wrong!!!" });
    }
})




const SignUpSlice = createSlice({
    name: 'userSlice',
    initialState: {
        loading: false,
        error: null,
        data: null,
        // token
    },
    extraReducers: {
        [SignUpSliceThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [SignUpSliceThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [SignUpSliceThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
});

export default SignUpSlice.reducer;