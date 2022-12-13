import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { signInLink } from "../../API/Api";
import { LoginUserSchema } from "../../Export/Default/Login";

export const SignInThunk = createAsyncThunk("signin", async ({ value, navigate, state, enqueueSnackbar }, { rejectWithValue }) => {


    try {
        await LoginUserSchema.validate(value, { abortEarly: false })
        const response = await Api.post(signInLink, value);
        enqueueSnackbar(`Welcome back!!!`, { variant: "success" });
        await navigate(state?.path || "/")
        // window.location.reload();
        return response;
    } catch (error) {
        console.log(error)
        if (error.message === "Network Error" || error?.response?.data?.message === `Can't find ${signInLink} on this server!`) {
            enqueueSnackbar("Something went wrong from network site, Please try again later", { variant: "error" })
        } else if (error?.response?.data?.message) {
            enqueueSnackbar(error?.response?.data?.message, { variant: "error" })
        } else if (error.errors) {
            enqueueSnackbar(error.errors[0], { variant: "warning" })
        }
        else {
            enqueueSnackbar("Something went wrong, Please try again later", { variant: "error" })
        }
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
            localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token))
            state.data = action.payload;
        });
        builder.addCase(SignInThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default SignInSlice.reducer;