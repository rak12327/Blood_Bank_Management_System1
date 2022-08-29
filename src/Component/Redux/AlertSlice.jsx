import { createSlice } from "@reduxjs/toolkit";

const AlertSlice = createSlice({
    name: "alert",
    initialState: {
        alertOpen: false,
        message: "",
        color: ""
    },
    reducers: {
        openAlert(state, action) {
            state.alertOpen = true;
            state.message = action.payload.message;
            state.color = action.payload.color;
        },
        closeALert(state, action) {
            state.alertOpen = false;
            state.color = "";
            state.message = "";
        }
    }
})

export const { openAlert, closeALert } = AlertSlice.actions;

export default AlertSlice.reducer;