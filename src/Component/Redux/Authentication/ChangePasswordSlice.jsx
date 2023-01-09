import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { changePasswordLink } from "../../API/Api";
import { Token } from "../../Export";
import {
  defaultPasswordValue,
  passwordSchema,
} from "../../Export/Default/Password";

export const changePasswordThunk = createAsyncThunk(
  changePasswordLink,
  async ({ value, setPasswordValue, enqueueSnackbar }, { rejectWithValue }) => {
    try {
      await passwordSchema.validate(value, {
        abortEarly: false,
      });
      const response = await Api.patch(changePasswordLink, value, {
        headers: { Authorization: "Bearer " + Token() },
      });
      await setPasswordValue(defaultPasswordValue);
      localStorage.setItem("token", JSON.stringify(response?.data?.userToken));
      enqueueSnackbar("Your pasword has been changed", { variant: "success" });
      return response;
    } catch (error) {
      if (error.errors) {
        enqueueSnackbar(error?.errors[0], { variant: "warning" });
      } else if (error.response && error.response.data.message) {
        enqueueSnackbar(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : "Something went wrong, please try again later",
          { variant: "error" }
        );
        return rejectWithValue(error.response.data);
      } else {
        enqueueSnackbar("Something went wrong, please try again later", {
          variant: "error",
        });
        return rejectWithValue({
          error,
          message: "Something went wrong, please try again later",
        });
      }
    }
  }
);
