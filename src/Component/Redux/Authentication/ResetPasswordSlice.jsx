import { createAsyncThunk } from "@reduxjs/toolkit";
import Api, { resetPasswordLink } from "../../API/Api";
import { ResetDefault, ResetSchema } from "../../Export/Default/Login";

export const ResetPasswordThunk = createAsyncThunk(
  resetPasswordLink,
  async (
    { value, token, navigate, setValue, enqueueSnackbar },
    { rejectWithValue }
  ) => {
    try {
      await ResetSchema.validate(value, { abortEarly: false });
      const response = await Api.patch(`${resetPasswordLink}/${token}`, value);
      setValue(ResetDefault);
      enqueueSnackbar("Your password have been changed, Please login again", {
        variant: "success",
      });
      await navigate("/sign-in");
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.errors) {
        enqueueSnackbar(error.errors[0], { variant: "warning" });
      } else if (error?.response && error?.response?.data?.message) {
        enqueueSnackbar(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : "Somthing went wrong",
          { variant: "error" }
        );
        console.log(error);
      }
      return rejectWithValue(error);
    }
  }
);
