import { createSlice } from "@reduxjs/toolkit";
import { requestFormThunk } from "./RequestFromThunk";

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
