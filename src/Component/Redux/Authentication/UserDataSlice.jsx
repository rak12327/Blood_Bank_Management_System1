import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { userLink } from "../../API/Api";

export const UserDataThunk = createAsyncThunk('userData', async ({ token, enqueueSnackbar }, { rejectWithValue }) => {
    try {
        const response = await Api.get(userLink
            , { headers: { Authorization: "Bearer " + token } }
        )
        // console.log(response)
        return response.data
    } catch (error) {
        if (error.response && error.response.data.message) {

            if (error.response.data.message === "Please login again.") {
                enqueueSnackbar("Something Went Wrong", { variant: "error" });
            }
            if (error.response.data.error.message === "invalid signature") {
                enqueueSnackbar("Your Account can't dedected, Please log in again!!", { variant: "error" });
            }

            if (error.response.data.error.message === "jwt expired") {
                localStorage.removeItem("token")
                enqueueSnackbar("Opps, Your session is expired. Please login again...", { variant: "error" });
            }

            enqueueSnackbar(error.response.data.message, { variant: "error" })
            return rejectWithValue(error.response.data.message);
        } else {
            enqueueSnackbar("Something went wrong with network site, Please try again late", { variant: "error" })
            return rejectWithValue(error)
        }

        //checking error
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
            state.loading = false
            state.user = null
            state.error = null
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