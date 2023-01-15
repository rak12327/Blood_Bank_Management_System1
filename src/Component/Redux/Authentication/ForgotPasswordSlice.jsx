import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { forgotPasswordLink } from "../../API/Api";
import { ForgotSchema } from "../../Export/Default/Login";

export const ForgotPasswordThunk = createAsyncThunk(
  forgotPasswordLink,
  async ({ email, setEmail }, { rejectWithValue }) => {
    try {
      await ForgotSchema.validate(email, { abortEarly: false });
      const response = await Api.post(forgotPasswordLink, { email });
      toast(`Reset password email sent to your ${email} email address`, {
        type: "success",
        theme: "colored",
      });
      setEmail("");
      return response.data;
    } catch (error) {
      if (error.response && error?.response?.data?.message) {
        console.log(error?.response?.data?.message);
        toast(error?.response?.data?.message || "Something went wrong", {
          type: "error",
          theme: "colored",
        });
      } else if (error?.errors[0]) {
        toast(error.errors[0], { type: "warning", theme: "colored" });
      }

      return rejectWithValue(error);
    }
  }
);
