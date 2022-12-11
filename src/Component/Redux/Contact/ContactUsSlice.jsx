import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api, { contactFormLink } from "../../API/Api";
import { Token } from "../../Export";
import { ContactUsSchema } from "../../Export/Default/contact";

export const contactUsForm = createAsyncThunk(contactFormLink, async ({ value, enqueueSnackbar, setValue }, { rejectWithValue }) => {
    try {
        await ContactUsSchema.validate(value, { abortEarly: false })
        await Api.post(contactFormLink, value
            , { headers: { Authorization: "Bearer " + Token() } }
        )
        enqueueSnackbar("Your response was succussfully submited", { variant: "success" })
        setValue(defaultContactUs)

    } catch (error) {
        if (error.errors) {
            enqueueSnackbar(error.errors[0], { variant: "warning" })
        }
        else if (error.response && error.response.data.message) {
            if (error.response.data.message === `Can't find ${contactFormLink} on this server!`) {
                enqueueSnackbar("Something went wrong, Please try after some time", { variant: "error" })
            }
            enqueueSnackbar(error.response.data.message, { variant: "error" });
            return rejectWithValue(error.response.data)
        } else {
            enqueueSnackbar(error?.data, { variant: "error" })
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