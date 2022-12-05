import { createSlice } from "@reduxjs/toolkit";

const DailogHandlerSlice = createSlice({
  name: "Dialog",
  initialState: {
    openDailog: false,
    id: null
  },
  reducers: {
    dailogHandler(state, action) {
      state.openDailog = !state.openDailog;
    },
    openForm(state, action) {
      state.id = action.payload
    },
    closeForm(state, action) {
      state.id = null
    }
  },
});

export const { dailogHandler, openForm, closeForm } = DailogHandlerSlice.actions;

export default DailogHandlerSlice.reducer;
