import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { signUpLink } from "../../API/Api";
import { defaultSignup, SignUpSchema } from "../../Export/Default/Login";

export const SignUpSliceThunk = createAsyncThunk(
  "userAuth",
  async ({ input, navigate, state, setInput }, { rejectWithValue }) => {
    const value = {
      name: input.firstName + " " + input.lastName,
      email: input.email,
      password: input.password,
    };

    try {
      await SignUpSchema.validate(input, { abortEarly: false });
      const response = await Api.post(signUpLink, value);
      setInput(defaultSignup);
      toast(`Welcome ${value.name}`, { type: "success", theme: "colored" });
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      await navigate(state?.path || "/");
      return response;
    } catch (error) {
      console.log(error);
      if (error.errors) {
        toast(error.errors[0], { type: "warning", theme: "colored" });
      } else if (
        error.message === "Network Error" ||
        error?.response?.data?.message ===
          `Can't find ${signUpLink} on this server!`
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
      return rejectWithValue({ error, message: "Somthing went wrong!!!" });
    }
  }
);
