import { createSlice } from "@reduxjs/toolkit";
import { ComponentNameThunk } from "./RequestFromThunk";

const ComponentNameSlice = createSlice({
    name: "componentNameSlice",
    initialState: {
        loading: false,
        error: null,
        positiveA: [],
        negativeA: [],
        negativeO: [],
        positiveO: [],
        negativeB: [],
        positiveB: [],
        negativeAB: [],
        positiveAB: [],
        aPositiveBlood: null,
        bPositiveBlood: null,
        abPositiveBlood: null,
        oPositiveBlood: null,
        aNegativeBlood: null,
        bNegativeBlood: null,
        abNegativeBlood: null,
        oNegativeBlood: null
    },
    reducers: {
        aPositiveBloodDetail(state, action) {
            if (state.positiveA) {
                state.aPositiveBlood = state.positiveA.find(el => el.componentName === action.payload)
            }
        },
        bPositiveBloodDetail(state, action) {
            if (state.positiveA) {
                state.bPositiveBlood = state.positiveB.find(el => el.componentName === action.payload)
            }
        },
        abPositiveBloodDetail(state, action) {
            if (state.positiveAB) {
                state.abPositiveBlood = state.positiveAB.find(el => el.componentName === action.payload)
            }
        },
        oPositiveBloodDetail(state, action) {
            if (state.positiveO) {
                state.oPositiveBlood = state.positiveO.find(el => el.componentName === action.payload)
            }
        },
        aNegativeBloodDetail(state, action) {
            if (state.negativeA) {
                state.aNegativeBlood = state.negativeA.find(el => el.componentName === action.payload)
            }
        },
        bNegativeBloodDetail(state, action) {
            if (state.negativeA) {
                state.bNegativeBlood = state.negativeB.find(el => el.componentName === action.payload)
            }
        },
        abNegativeBloodDetail(state, action) {
            if (state.negativeAB) {
                state.abNegativeBlood = state.negativeAB.find(el => el.componentName === action.payload)
            }
        },
        oNegativeBloodDetail(state, action) {
            if (state.negativeO) {
                state.oNegativeBlood = state.negativeO.find(el => el.componentName === action.payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ComponentNameThunk.pending, (state, action) => {
            state.loading = true
            state.error = null;
        })
        builder.addCase(ComponentNameThunk.fulfilled, (state, action) => {
            state.loading = false
            state.error = null;
            state.negativeA = action.payload.result.filter(state => {
                return state.bloodName === "A" && state.rh === "negative"
            });
            state.positiveA = action.payload.result.filter(state => {
                return state.bloodName === "A" && state.rh === "positive"
            })
            state.negativeB = action.payload.result.filter(state => {
                return state.bloodName === "B" && state.rh === "negative"
            });
            state.positiveB = action.payload.result.filter(state => {
                return state.bloodName === "B" && state.rh === "positive"
            })
            state.negativeO = action.payload.result.filter(state => {
                return state.bloodName === "O" && state.rh === "negative"
            });
            state.positiveO = action.payload.result.filter(state => {
                return state.bloodName === "O" && state.rh === "positive"
            })
            state.negativeAB = action.payload.result.filter(state => {
                return state.bloodName === "AB" && state.rh === "negative"
            });
            state.positiveAB = action.payload.result.filter(state => {
                return state.bloodName === "AB" && state.rh === "positive"
            })
        })
        builder.addCase(ComponentNameThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload;
        })
    }
})

export const { aPositiveBloodDetail, bPositiveBloodDetail, abPositiveBloodDetail, oPositiveBloodDetail, aNegativeBloodDetail, bNegativeBloodDetail, abNegativeBloodDetail, oNegativeBloodDetail } = ComponentNameSlice.actions

export default ComponentNameSlice.reducer;