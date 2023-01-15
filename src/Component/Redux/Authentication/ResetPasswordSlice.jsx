import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { resetPasswordLink } from "../../API/Api";
import { ResetDefault, ResetSchema } from "../../Export/Default/Login";

export const ResetPasswordThunk = createAsyncThunk(
  resetPasswordLink,
  async ({ value, token, navigate, setValue }, { rejectWithValue }) => {
    try {
      await ResetSchema.validate(value, { abortEarly: false });
      const response = await Api.patch(`${resetPasswordLink}/${token}`, value);
      setValue(ResetDefault);
      toast("Your password have been changed, Please login again", {
        type: "success",
        theme: "colored",
      });
      await navigate("/sign-in");
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.errors) {
        toast(error.errors[0], { type: "warning", theme: "colored" });
      } else if (error?.response && error?.response?.data?.message) {
        toast(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : "Somthing went wrong",
          { type: "error", theme: "colored" }
        );
        console.log(error);
      }
      return rejectWithValue(error);
    }
  }
);
