import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { baseURL } from "../API/Api";

export const contactUsForm = createAsyncThunk(
    "api/contactUs",
    async (data, { rejectWithValue }) => {
        try {
            await axios.post(`${baseURL}/api/contactUs`, data)

        } catch (error) {
            return rejectWithValue({ error: error, message: 'Opps there seems to be an error' })
        }
    }
)

const contactUsSlice = createSlice({
    name: "contactUs",
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: {
        [contactUsForm.pending]: (state, action) => {
            state.loading = true;
        },
        [contactUsForm.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [contactUsForm.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default contactUsSlice.reducer