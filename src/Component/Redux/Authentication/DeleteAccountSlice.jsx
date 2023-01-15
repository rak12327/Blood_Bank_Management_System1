import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { deleteUserLink } from "../../API/Api";
import { dailogHandler } from "../Model/DailogHandlerSlice";
import { deleteUserData } from "./UserDataSlice";

export const DeleteAccountThunk = createAsyncThunk(
  deleteUserLink,
  async ({ id, dispatch, navigate }, { rejectWithValue }) => {
    dispatch(dailogHandler());
    try {
      const response = await Api.delete(deleteUserLink, { data: { id } });
      toast("Your account deleted", { type: "success", theme: "colored" });
      localStorage.removeItem("token");
      dispatch(deleteUserData());
      navigate("/sign-in");
      return response;
    } catch (error) {
      console.log(error);
      toast("something went wrong, please try again later", {
        type: "error",
        theme: "colored",
      });
      return rejectWithValue({
        error,
        message: "Something went wrong form our site, please try again later",
      });
    }
  }
);

const deleteAccountSlice = createSlice({
  name: "deleteAccountSlice",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(DeleteAccountThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(DeleteAccountThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(DeleteAccountThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default deleteAccountSlice.reducer;
