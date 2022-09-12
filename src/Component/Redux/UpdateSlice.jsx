import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api, { updateUserLink } from '../API/Api'
import { openAlert } from './AlertSlice';

export const updateUserThunk = createAsyncThunk(
    updateUserLink,
    async ({ value, dispatch, setUpdateAcc }, { rejectWithValue }) => {
        try {
            const response = await Api.patch(updateUserLink, value);
            await dispatch(openAlert({ message: "Updated", color: "green" }))
            await setUpdateAcc("");
            return response
        } catch (error) {
            await dispatch(openAlert({ message: "Something went wrong, Please try again later", color: "red" }))
            return rejectWithValue(error)
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