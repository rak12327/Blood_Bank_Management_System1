import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { signInLink } from "../../API/Api";
import { defaultValue, SignInSchema } from "../../Export/Default/Login";

export const SignInThunk = createAsyncThunk(
  "signin",
  async ({ value, navigate, state, setValue }, { rejectWithValue }) => {
    try {
      await SignInSchema.validate(value, { abortEarly: false });
      const response = await Api.post(signInLink, value);
      setValue(defaultValue);
      toast(`Welcome back!!!`, { type: "success", theme: "colored" });
      await navigate(state?.path || "/");
      // window.location.reload();
      return response.data;
    } catch (error) {
      if (error.errors) {
        toast(error.errors[0], { type: "warning", theme: "colored" });
      } else if (
        error.message === "Network Error" ||
        error?.response?.data?.message ===
          `Can't find ${signInLink} on this server!`
      ) {
        toast(
          "Something went wrong from network site, Please try again later",
          { type: "error", theme: "colored" }
        );
      } else if (error?.response?.data?.message) {
        toast(error?.response?.data?.message, {
          type: "error",
          theme: "colored",
        });
      } else {
        toast("Something went wrong, Please try again later", {
          type: "error",
          theme: "colored",
        });
      }
      return rejectWithValue({ error, message: "Something went wrong" });
    }
  }
);
