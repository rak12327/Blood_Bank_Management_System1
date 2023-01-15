import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { contactFormLink } from "../../API/Api";
import { Token } from "../../Export";
import { ContactUsSchema } from "../../Export/Default/contact";

export const contactUsForm = createAsyncThunk(
  contactFormLink,
  async ({ value, setValue }, { rejectWithValue }) => {
    try {
      await ContactUsSchema.validate(value, { abortEarly: false });
      await Api.post(contactFormLink, value, {
        headers: { Authorization: "Bearer " + Token() },
      });
      toast("Your response was succussfully submited", {
        type: "success",
        theme: "colored",
      });
      setValue(defaultContactUs);
    } catch (error) {
      if (error.errors) {
        toast(error.errors[0], { type: "warning", theme: "colored" });
      } else if (error.response && error.response.data.message) {
        if (
          error.response.data.message ===
          `Can't find ${contactFormLink} on this server!`
        ) {
          toast("Something went wrong, Please try after some time", {
            type: "error",
            theme: "colored",
          });
        }
        toast(error.response.data.message, { type: "error", theme: "colored" });
        return rejectWithValue(error.response.data);
      } else {
        toast(error?.data, { type: "error", theme: "colored" });
        return rejectWithValue({
          error: error,
          message: "Opps there seems to be an error",
        });
      }
    }
  }
);

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
      state.error = action.payload;
    },
  },
});

export default contactUsSlice.reducer;
