import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { changePasswordLink } from "../../API/Api";
import { Token } from "../../Export";
import {
  defaultPasswordValue,
  passwordSchema,
} from "../../Export/Default/Password";

export const changePasswordThunk = createAsyncThunk(
  changePasswordLink,
  async ({ value, setPasswordValue }, { rejectWithValue }) => {
    try {
      await passwordSchema.validate(value, {
        abortEarly: false,
      });
      const response = await Api.patch(changePasswordLink, value, {
        headers: { Authorization: "Bearer " + Token() },
      });
      await setPasswordValue(defaultPasswordValue);
      localStorage.setItem("token", JSON.stringify(response?.data?.userToken));
      toast("Your pasword has been changed", {
        type: "success",
        theme: "colored",
      });
      return response;
    } catch (error) {
      if (error.errors) {
        toast(error?.errors[0], { type: "warning", theme: "colored" });
      } else if (error.response && error.response.data.message) {
        toast(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : "Something went wrong, please try again later",
          { type: "error", theme: "colored" }
        );
        return rejectWithValue(error.response.data);
      } else {
        toast("Something went wrong, please try again later", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue({
          error,
          message: "Something went wrong, please try again later",
        });
      }
    }
  }
);
