import { createAsyncThunk } from "@reduxjs/toolkit";
import Api, { signUpLink } from "../../API/Api";
import { defaultSignup, SignUpSchema } from "../../Export/Default/Login";

export const SignUpSliceThunk = createAsyncThunk(
  "userAuth",
  async (
    { input, enqueueSnackbar, navigate, state, setInput },
    { rejectWithValue }
  ) => {
    const value = {
      name: input.firstName + " " + input.lastName,
      email: input.email,
      password: input.password,
    };

    try {
      await SignUpSchema.validate(input, { abortEarly: false });
      const response = await Api.post(signUpLink, value);
      setInput(defaultSignup);
      enqueueSnackbar(`Welcome ${value.name}`, { varaint: "success" });
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      await navigate(state?.path || "/");
      return response;
    } catch (error) {
      console.log(error);
      if (error.errors) {
        enqueueSnackbar(error.errors[0], { variant: "warning" });
      } else if (
        error.message === "Network Error" ||
        error?.response?.data?.message ===
          `Can't find ${signUpLink} on this server!`
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
      return rejectWithValue({ error, message: "Somthing went wrong!!!" });
    }
  }
);
