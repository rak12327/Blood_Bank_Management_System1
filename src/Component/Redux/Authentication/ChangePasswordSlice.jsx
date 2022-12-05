import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { changePasswordLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const changePasswordThunk = createAsyncThunk(changePasswordLink, async ({ value, dispatch, setUpdateAcc, setPasswordValue, token }, { rejectWithValue }) => {
    console.log(value);
    try {
        const response = await Api.patch(changePasswordLink, value, { headers: { Authorization: "Bearer " + token } });
        console.log((response).status);
        await setPasswordValue({ currentPassword: "", newPassword: "", confirmPassword: "" });
        localStorage.setItem("token", JSON.stringify(response?.data?.userToken))
        await dispatch(openAlert({ message: "Your pasword has been changed", color: "green" }));
        await setUpdateAcc("");
        console.log(response);
        return response;
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong, please try again later", color: "red" }))
            return rejectWithValue(error.response.data)
        } else {
            await dispatch(openAlert({ message: "Something went wrong, please try again later", color: "red" }))
            return rejectWithValue({ error, message: "Something went wrong, please try again later" })
        }
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