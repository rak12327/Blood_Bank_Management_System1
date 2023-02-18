import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, {
  BloodDetails,
  ComponentName,
  deleteRequestFromList,
  requestFormComplete,
  requestFormLink,
  requestFormList,
  requestFormNotComplete,
  updatedRequestForm,
} from "../../API/Api";
import {
  defaultRequestValue,
  RequestFormSchema,
} from "../../Export/Default/RequestForm";
import { closeForm } from "../Model/DailogHandlerSlice";
import { clearModelData } from "../Model/RequestModel";
import { updateRequestList } from "./RequestFormListSlice";

export const RequestFormListBeforeDeliver = createAsyncThunk(
  requestFormList,
  async ({ rejectWithValue }) => {
    try {
      const result = await Api.get(requestFormList, {
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token")),
        },
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { theme: "colored", type: "error" });

        return rejectWithValue(error.response.data.message);
      } else {
        toast("Opps!, there seems to be an error. Please try again later", {
          theme: "colored",
          type: "error",
        });

        return rejectWithValue({
          error,
          message: "Opps!, there seems to be an error. Please try again later",
        });
      }
    }
  }
);

export const RequestFormListComplete = createAsyncThunk(
  "requestFormComplete",
  async ({ rejectWithValue }) => {
    try {
      return await Api.get(requestFormComplete, {
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token")),
        },
      }).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });

        return rejectWithValue(error.response.data.message);
      } else {
        toast("Opps!, there seems to be an error. Please try again later", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue({
          error,
          message: "Opps!, there seems to be an error. Please try again later",
        });
      }
    }
  }
);

export const RequestFormListNotComplete = createAsyncThunk(
  "requestFormNotComplete",
  async ({ token }, { rejectWithValue }) => {
    try {
      return await Api.get(requestFormNotComplete, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      }).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        toast(error.response.data.message, { type: "error", theme: "colored" });
        return rejectWithValue(error.response.data.message);
      } else {
        toast("Opps!, there seems to be an error. Please try again later", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue({
          error,
          message: "Opps!, there seems to be an error. Please try again later",
        });
      }
    }
  }
);

export const ComponentNameThunk = createAsyncThunk(
  "ComponentNameThunk",
  async ({ rejectWithValue }) => {
    try {
      return await (
        await Api.get(ComponentName)
      ).data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { theme: "colored", type: "error" });

        return rejectWithValue(error.response.data);
      } else {
        toast("Something went wrong, Please try again later", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue(error);
      }
    }
  }
);

export const BloodDetailsThunk = createAsyncThunk(
  "BloodDetail",
  async ({ dispatch, componentName }, { rejectWithValue }) => {
    try {
      return await Api.get(`${BloodDetails}=${componentName}`);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });
        return rejectWithValue(error.response.data);
      } else {
        toast("Opps, It's seems something is wronge, Please try again later", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue({ error });
      }
    }
  }
);

// Create request order
export const requestFormThunk = createAsyncThunk(
  "request-form",
  async ({ input, dispatch, navigate, token }, { rejectWithValue }) => {
    try {
      console.log(input);
      await RequestFormSchema.validate(input, { abortEarly: false });
      const response = await Api.post(requestFormLink, input, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      toast("your response was succussfully submited", {
        type: "success",
        theme: "colored",
      });
      await navigate("/request");
      // console.log(response)
      await dispatch(clearModelData());
      return response.data;
    } catch (error) {
      if (error.errors) {
        toast(error.errors[0], { type: "error", theme: "colored" });
      } else if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });
        rejectWithValue(error.response.data);
      } else {
        toast("Something went wrong, Please try again later", {
          type: "error",
          theme: "colored",
        });
        dispatch(clearModelData());
        return rejectWithValue({
          error,
          message: "Opps there seems to be an error",
        });
      }
    }
  }
);

// Update Request order
export const UpdatedRequestList = createAsyncThunk(
  "updatedRequestList",
  async ({ dispatch, id, input, setInput }, { rejectWithValue }) => {
    try {
      await RequestFormSchema.validate(input, { abortEarly: false });
      const result = await Api.patch(`${updatedRequestForm}/${id}`, input, {
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token")),
        },
      });
      console.log(result.data);
      setInput(defaultRequestValue);
      dispatch(updateRequestList({ ...input, id }));
      dispatch(closeForm());

      return result.data;
      // return input;
    } catch (error) {
      if (error.errors) {
        toast(error.errors[0], { type: "error", theme: "colored" });
      } else if (error.response && error.response.data.message) {
        toast(error.response.data.message, { type: "error", theme: "colored" });
        return rejectWithValue(error.response.data);
      } else {
        dispatch(closeForm());
        toast(
          "Opps, It;s seems Something is wrong form our site, Please try again later",
          { type: "error", theme: "colored" }
        );
        return rejectWithValue(error);
      }
    }
  }
);

export const DeleteRequestList = createAsyncThunk(
  "deleteRequestList",
  async ({ dispatch, id }, { rejectWithValue }) => {
    try {
      const result = await Api.patch(`${deleteRequestFromList}/${id}`, {
        headers: {
          Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token")),
        },
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast(error.response.data.message, { theme: "colored", type: "error" });
        return rejectWithValue(error.response.data);
      } else {
        toast(
          "Opps, It;s seems Something is wrong form our site, Please try again later",
          { theme: "colored", type: "error" }
        );
        return rejectWithValue(error);
      }
    }
  }
);
