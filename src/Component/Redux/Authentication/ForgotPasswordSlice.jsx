import { createAsyncThunk } from "@reduxjs/toolkit";
import Api, { forgotPasswordLink } from "../../API/Api";
import { ForgotSchema } from "../../Export/Default/Login";

export const ForgotPasswordThunk = createAsyncThunk(
  forgotPasswordLink,
  async ({ email, setEmail, enqueueSnackbar }, { rejectWithValue }) => {
    try {
      await ForgotSchema.validate(email, { abortEarly: false });
      const response = await Api.post(forgotPasswordLink, { email });
      enqueueSnackbar(
        `Reset password email sent to your ${email} email address`,
        { variant: "success" }
      );
      setEmail("");
      return response.data;
    } catch (error) {
      if (error.response && error?.response?.data?.message) {
        console.log(error?.response?.data?.message);
        enqueueSnackbar(
          error?.response?.data?.message || "Something went wrong",
          { variant: "error" }
        );
      } else if (error?.errors[0]) {
        enqueueSnackbar(error.errors[0], { variant: "warning" });
      }

      return rejectWithValue(error);
    }
  }
);
