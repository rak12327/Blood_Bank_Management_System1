import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { deleteUserLink } from "../API/Api";
import { openAlert } from "./AlertSlice";
import { dailogHandler } from "./DailogHandlerSlice";
import { deleteUserData } from "./UserDataSlice";

export const DeleteAccountThunk = createAsyncThunk(deleteUserLink, async ({ id, dispatch, navigate }, { rejectWithValue }) => {
    dispatch(dailogHandler());
    console.log({ id })
    try {
        const response = await Api.delete(deleteUserLink, { data: { id } });
        dispatch(openAlert({ color: "green", message: "Your account deleted" }));
        localStorage.removeItem("token")
        dispatch(deleteUserData());
        navigate("/sign-in")
        return response;
    } catch (error) {
        console.log(error);
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