import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api, { contactFormLink } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";

export const contactUsForm = createAsyncThunk(
    contactFormLink,
    async ({ value, dispatch, token }, { rejectWithValue }) => {
        try {
            await Api.post(contactFormLink, value
                , { headers: { Authorization: "Bearer " + token } }
            )
            dispatch(openAlert({ message: "Your response was succussfully submited", color: "green" }))

        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            if (error.response && error.response.data.message) {
                if (error.response.data.message === `Can't find ${contactFormLink} on this server!`) {
                    return dispatch(openAlert({ message: "", color: "red" }))
                }
                dispatch(openAlert({ message: error.response.data.message, color: "red" }))
                return rejectWithValue(error.response.data)
            } else {
                dispatch(openAlert({ message: error?.data, color: "red" }))
                return rejectWithValue({ error: error, message: 'Opps there seems to be an error' })
            }

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