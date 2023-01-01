import { createSlice } from "@reduxjs/toolkit";
import { ForgotPasswordThunk } from "./ForgotPasswordSlice";
import { ResetPasswordThunk } from "./ResetPasswordSlice";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    clearData(state, action) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ResetPasswordThunk.pending, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(ResetPasswordThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(ResetPasswordThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });

    // ForgotPasswordThunk
    builder.addCase(ForgotPasswordThunk.pending, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(ForgotPasswordThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(ForgotPasswordThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });
  },
});

export const { clearData } = AuthSlice.actions;
export default AuthSlice.reducer;
