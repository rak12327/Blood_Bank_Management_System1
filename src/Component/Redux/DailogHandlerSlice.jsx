import { createSlice } from "@reduxjs/toolkit";

const DailogHandlerSlice = createSlice({
  name: "Dialog",
  initialState: {
    openDailog: false,
  },
  reducers: {
    dailogHandler(state, action) {
      state.openDailog = !state.openDailog;
    },
  },
});

export const { dailogHandler } = DailogHandlerSlice.actions;

export default DailogHandlerSlice.reducer;
