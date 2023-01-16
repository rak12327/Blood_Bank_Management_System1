import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api, { userLink } from "../../API/Api";

export const UserDataThunk = createAsyncThunk(
  "userData",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await Api.get(userLink, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response)
      toast(`Welcome`, { type: "success", theme: "colored" });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        if (error.response.data.message === "Please login again.") {
          toast("Something Went Wrong", {
            type: "error",
            theme: "colored",
          });
        }
        if (error.response.data.error.message === "invalid signature") {
          toast("Your Account can't dedected, Please log in again!!", {
            type: "success",
            theme: "colored",
          });
        }

        if (error.response.data.error.message === "jwt expired") {
          localStorage.removeItem("token");
          //Check if i can navigate to home page?
          toast("Opps, Your session is expired. Please login again...", {
            type: "success",
            theme: "colored",
          });
        }

        toast(error.response.data.message, { type: "error", theme: "colored" });
        return rejectWithValue(error.response.data.message);
      } else {
        toast("Something went wrong with network site, Please try again late", {
          type: "error",
          theme: "colored",
        });
        return rejectWithValue(error);
      }

      //checking error
    }
  }
);

const UserDataSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    deleteUserData(state, action) {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserDataThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UserDataThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(UserDataThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { deleteUserData } = UserDataSlice.actions;

export default UserDataSlice.reducer;
