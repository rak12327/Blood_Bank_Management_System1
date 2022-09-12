import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { changePasswordLink } from "../API/Api";
import { openAlert } from "./AlertSlice";

export const changePasswordThunk = createAsyncThunk(changePasswordLink, async ({ value, dispatch }, { rejectWithValue }) => {
    try {
        const response = Api.patch(changePasswordLink, value);
        console.log((await response).status);
        dispatch(openAlert({ message: "Your pasword has been changed", color: "green" }));
        return response;
    } catch (error) {
        dispatch(openAlert({ message: "Something went wrong, please try again later", color: "rel" }))
        return rejectWithValue({ error, message: "Something went wrong, please try again later" })
    }
})


const changePasswordSlice = createSlice({
    name: "changePasswordSlice",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: {
        [changePasswordThunk.pending]: (state, action) => {
            state.loading = true
        },
        [changePasswordThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [changePasswordThunk.rejected]: (state, action) => {
            state.laoding = false
            state.error = action.payload
        }
    }
})

export default changePasswordSlice.reducer;