import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { updateUserLink } from "../../API/Api";

export const updateUserThunk = createAsyncThunk(
  updateUserLink,
  async ({ value, setUpdateAcc, token }, { rejectWithValue }) => {
    try {
      const response = await Api.patch(updateUserLink, value, {
        headers: { Authorization: "Bearer " + token },
      });
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      await setUpdateAcc("");
      toast("Updated", { type: "success", theme: "colored" });
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });
        rejectWithValue(error.response.data);
      } else {
        toast("Something went wrong, Please try again later", {
          theme: "colored",
          type: "error",
        });
        return rejectWithValue(error);
      }
    }
  }
);

const UpdateUserSlice = createSlice({
  name: "updateSlice",
  initialState: {
    loading: false,
    data: null,
    error: null,
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
    },
  },
});

export default UpdateUserSlice.reducer;
