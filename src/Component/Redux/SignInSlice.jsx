import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../API/Api";
import { openAlert } from "./AlertSlice";

export const SignInThunk = createAsyncThunk("signin", async ({ value, dispatch, navigate, state }, { rejectWithValue }) => {

    const signIn = "/api/v1/signin";
    try {
        const response = await Api.post(signIn, value);
        dispatch(openAlert({ message: `Welcome back!!!`, color: "green" }));
        navigate(state?.path || "/")
        return response;
    } catch (error) {
        dispatch(openAlert({ message: error.message === "Network Error" || error?.response?.data?.message === `Can't find ${signIn} on this server!` ? "Something went wrong, Try again later" : error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong, please try again", color: "red" }))
        return rejectWithValue({ error, message: "Something went wrong" })
    }
});

const SignInSlice = createSlice({
    name: "signinSlice",
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(SignInThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(SignInThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token))
        });
        builder.addCase(SignInThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default SignInSlice.reducer;