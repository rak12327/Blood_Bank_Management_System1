import { createSlice, current } from "@reduxjs/toolkit";
import { formatDate } from "../../Export";
import {
  RequestFormListBeforeDeliver,
  RequestFormListComplete,
  RequestFormListNotComplete,
} from "./RequestFromThunk";

const RequestFormListSlice = createSlice({
  name: "requestFormList",
  initialState: {
    loading: false,
    error: null,
    requestList: [],
    completeList: [],
    notCompleteList: [],
  },
  reducers: {
    updateRequestList(state, action) {
      const post = state.requestList.requestList.find(
        (post) => post._id === action.payload.id
      );
      if (post) {
        post.patientName = action.payload.patientName;
        console.log(
          new Date(action.payload.dateOfReceivingBlood).toLocaleString
        );
        post.dateOfReceivingBlood = new Date(
          action.payload.dateOfReceivingBlood
        );
      }
      console.log(current(post));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RequestFormListBeforeDeliver.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RequestFormListBeforeDeliver.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.requestList = action.payload;
    });
    builder.addCase(RequestFormListBeforeDeliver.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.requestList = null
    });
    builder.addCase(RequestFormListComplete.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RequestFormListComplete.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.completeList = action.payload;
    });
    builder.addCase(RequestFormListComplete.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.completeList = null
    });
    builder.addCase(RequestFormListNotComplete.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(RequestFormListNotComplete.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.notCompleteList = action.payload;
    });
    builder.addCase(RequestFormListNotComplete.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.requestList = null
    });
  },
});

export const { updateRequestList } = RequestFormListSlice.actions;

export default RequestFormListSlice.reducer;
