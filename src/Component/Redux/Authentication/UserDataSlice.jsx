import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { userLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const UserDataThunk = createAsyncThunk('userData', async ({ token, dispatch }, { rejectWithValue }) => {
    try {
        const response = await Api.get(userLink
            , { headers: { Authorization: "Bearer " + token } }
        )
        // console.log(response)
        return response.data
    } catch (error) {
        if (error.response && error.response.data.message) {

            if (error.response.data.message === "Please login again.") {
                return
            }
            if (error.response.data.error.message === "invalid signature") {
                return dispatch(openAlert({ message: "Your Account can't dedected, Please log in again!!", color: "red" }))
            }

            if (error.response.data.error.message === "jwt expired") {
                localStorage.removeItem("token")
                return dispatch(openAlert({ message: "Opps, Your session is expired. Please login again...", color: "red" }))
            }

            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            return rejectWithValue(error.response.data.message);
        } else {
            dispatch(openAlert({ message: "Something went wrong with network site, Please try again late", color: "red" }))
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