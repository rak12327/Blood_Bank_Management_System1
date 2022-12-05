import { createSlice } from "@reduxjs/toolkit";
import { BloodDetailsThunk } from "./RequestFromThunk";
import { useSelector } from "react-redux"

// export const listData = useSelector(state => state.componentName)

const BloodDetailsSlice = createSlice({
    name: 'bloodDetailsSlice',
    initialState: {
        positiveA: null,
        negativeA: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(BloodDetailsThunk.pending, (state, action) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(BloodDetailsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.positiveA = action.payload
        })

        // builder.addCase(BloodDetailsThunk.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.negativeA = action.payload
        // })

        builder.addCase(BloodDetailsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default BloodDetailsSlice.reducer;