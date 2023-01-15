import { createSlice } from "@reduxjs/toolkit";
import { changePasswordThunk } from "./ChangePasswordSlice";
import { ForgotPasswordThunk } from "./ForgotPasswordSlice";
import { ResetPasswordThunk } from "./ResetPasswordSlice";
import { SignInThunk } from "./SignInSlice";
import { SignUpSliceThunk } from "./SignUpSlice";

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    loading: false,
    data: null,
    error: null,
    token,
  },
  reducers: {
    clearData(state, action) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignInThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(SignInThunk.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("token", JSON.stringify(action?.payload?.token));
      state.token = action.payload.token;
      state.data = action.payload;
    });
    builder.addCase(SignInThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

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

    // ChangePasswordThunk
    builder.addCase(changePasswordThunk.pending, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(changePasswordThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(changePasswordThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });

    // SignupPasswordThunk
    builder.addCase(SignUpSliceThunk.pending, (state, action) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(SignUpSliceThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(SignUpSliceThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    });
  },
});

export const { clearData } = AuthSlice.actions;
export default AuthSlice.reducer;
