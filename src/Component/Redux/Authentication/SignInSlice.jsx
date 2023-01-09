import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { signInLink } from "../../API/Api";
import { defaultValue, SignInSchema } from "../../Export/Default/Login";

export const SignInThunk = createAsyncThunk(
  "signin",
  async (
    { value, navigate, state, enqueueSnackbar, setValue },
    { rejectWithValue }
  ) => {
    try {
      await SignInSchema.validate(value, { abortEarly: false });
      const response = await Api.post(signInLink, value);
      setValue(defaultValue);
      enqueueSnackbar(`Welcome back!!!`, { variant: "success" });
      await navigate(state?.path || "/");
      // window.location.reload();
      return response.data;
    } catch (error) {
      if (error.errors) {
        enqueueSnackbar(error.errors[0], { variant: "warning" });
      } else if (
        error.message === "Network Error" ||
        error?.response?.data?.message ===
          `Can't find ${signInLink} on this server!`
      ) {
        enqueueSnackbar(
          "Something went wrong from network site, Please try again later",
          { variant: "error" }
        );
      } else if (error?.response?.data?.message) {
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
      } else {
        enqueueSnackbar("Something went wrong, Please try again later", {
          variant: "error",
        });
      }
      return rejectWithValue({ error, message: "Something went wrong" });
    }
  }
);
