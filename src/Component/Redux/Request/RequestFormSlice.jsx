import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { requestFormLink } from "../../API/Api";
import { clearModelData } from "../Model/RequestModel";
import { RequestFormSchema } from "../../Export/Default/RequestForm";

export const requestFormThunk = createAsyncThunk(
  "request-form",
  async ({ input, dispatch, navigate, token }, { rejectWithValue }) => {
    try {
      await RequestFormSchema.validate(input, { abortEarly: false });
      const response = await Api.post(requestFormLink, input, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      toast("your response was succussfully submited", {
        type: "success",
        theme: "colored",
      });
      await navigate("/request");
      // console.log(response)
      await dispatch(clearModelData());
      return response.data;
    } catch (error) {
      if (error.errors) {
        toast(error.errors[0], { type: "error", theme: "colored" });
      } else if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });
        rejectWithValue(error.response.data);
      } else {
        toast("Something went wrong, Please try again later", {
          type: "error",
          theme: "colored",
        });
        dispatch(clearModelData());
        return rejectWithValue({
          error,
          message: "Opps there seems to be an error",
        });
      }
    }
  }
);

const RequestFormSlice = createSlice({
  name: "requestForm",
  initialState: {
    loading: false,
    error: "",
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(requestFormThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(requestFormThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(requestFormThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default RequestFormSlice.reducer;
