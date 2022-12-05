import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api, { updateUserLink } from '../../API/Api'
import { openAlert } from '../Model/AlertSlice';

export const updateUserThunk = createAsyncThunk(
    updateUserLink,
    async ({ value, dispatch, setUpdateAcc, token }, { rejectWithValue }) => {
        try {
            const response = await Api.patch(updateUserLink, value
                , { headers: { Authorization: "Bearer " + token } });
            localStorage.setItem("token", JSON.stringify(response?.data?.token))
            await setUpdateAcc("");
            await dispatch(openAlert({ message: "Updated", color: "green" }))
            return response
        } catch (error) {
            if (error.response && error.response.data.message) {
                dispatch(openAlert({ message: error.response.data.message, color: "red" }))
                rejectWithValue(error.response.data)
            } else {
                await dispatch(openAlert({ message: "Something went wrong, Please try again later", color: "red" }))
                return rejectWithValue(error)
            }
        }
    }
);

const UpdateUserSlice = createSlice({
    name: "updateSlice",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: {
        [updateUserThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [updateUserThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default UpdateUserSlice.reducer;