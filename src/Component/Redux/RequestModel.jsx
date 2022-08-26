import { createSlice } from '@reduxjs/toolkit'

const RequestModel = createSlice({
    name: "Request Model",
    initialState: {
        openModel: false,
        requestData: {
            bloodName: "",
            unit: "",
            price: "",
        }
    },
    reducers: {
        openAPositive(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openANegative(state, action) {
            state.openModel = true;
            state.requestData = action.payload;
        },
        openBPositive(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openBNegative(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openABNegative(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openABPositive(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openOPositive(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },
        openONegative(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },


        closeModel(state, action) {
            state.openModel = false;
            state.requestData = {}
        }
    }
})

export const { openAPositive, openANegative, openONegative, openABNegative, openABPositive, openBNegative, openBPositive, openOPositive, closeModel } = RequestModel.actions

export default RequestModel.reducer;    