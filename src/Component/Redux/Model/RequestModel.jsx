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
        openBloodDetailsModel(state, action) {
            state.openModel = true;
            state.requestData = action.payload
        },

        closeModel(state, action) {
            state.openModel = false;
            // state.requestData = {}
        },
        clearModelData(state, action) {
            state.requestData = {}
        }
    }
})

export const { openBloodDetailsModel, closeModel, clearModelData } = RequestModel.actions

export default RequestModel.reducer;    