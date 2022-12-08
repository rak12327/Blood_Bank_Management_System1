import { createSlice } from "@reduxjs/toolkit";

const DailogHandlerSlice = createSlice({
  name: "Dialog",
  initialState: {
    openDailog: false,
    type: "",
  },
  reducers: {
    dailogHandler(state, action) {
      state.openDailog = !state.openDailog;
    },
    openForm(state, action) {
      state.type = action.payload
    },
    closeForm(state, action) {
      state.type = ""
    }
  },
});

export const { dailogHandler, openForm, closeForm } = DailogHandlerSlice.actions;

export default DailogHandlerSlice.reducer;
