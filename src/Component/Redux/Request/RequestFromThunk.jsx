import { createAsyncThunk } from "@reduxjs/toolkit";
import Api, { BloodDetails, ComponentName, deleteRequestFromList, requestFormComplete, requestFormList, requestFormNotComplete, updatedRequestForm } from "../../API/Api";
import { openAlert } from "../Model/AlertSlice";
import { closeForm } from "../Model/DailogHandlerSlice";

export const RequestFormListBeforeDeliver = createAsyncThunk(requestFormList, async (dispatch, { rejectWithValue }) => {
    try {
        const result = await Api.get(requestFormList, {
            headers: {
                Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
            }
        }
        )
        return result.data;
    } catch (error) {
        console.log(error.response.data)
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ color: "red", message: error.response.data.message }))
            return rejectWithValue(error.response.data.message)
        } else {
            dispatch(openAlert({ color: "red", message: "Opps!, there seems to be an error. Please try again later" }))
            return rejectWithValue({ error, message: "Opps!, there seems to be an error. Please try again later" })
        }
    }
})

export const RequestFormListComplete = createAsyncThunk("requestFormComplete", async (dispatch, { rejectWithValue }) => {
    try {
        return await Api.get(requestFormComplete, {
            headers: {
                Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
            }
        }
        ).then(res => { return res.data })
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ color: "red", message: error.response.data.message }))
            return rejectWithValue(error.response.data.message)
        } else {
            dispatch(openAlert({ color: "red", message: "Opps!, there seems to be an error. Please try again later" }))
            return rejectWithValue({ error, message: "Opps!, there seems to be an error. Please try again later" })
        }
    }
})

export const RequestFormListNotComplete = createAsyncThunk("requestFormNotComplete", async (dispatch, { rejectWithValue }) => {
    try {
        return await Api.get(requestFormNotComplete,
            {
                headers: {
                    Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
                }
            }
        ).then(res => { return res.data })
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ color: "red", message: error.response.data.message }))
            return rejectWithValue(error.response.data.message)
        } else {
            dispatch(openAlert({ color: "red", message: "Opps!, there seems to be an error. Please try again later" }))
            return rejectWithValue({ error, message: "Opps!, there seems to be an error. Please try again later" })
        }
    }
})


export const ComponentNameThunk = createAsyncThunk("ComponentNameThunk", async (dispatch, { rejectWithValue }) => {
    try {
        return await (await Api.get(ComponentName)).data
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            return rejectWithValue(error.response.data)
        } else {
            dispatch(openAlert({ message: "Something went wrong, Please try again later" }))
            return rejectWithValue(error)
        }
    }
})

export const BloodDetailsThunk = createAsyncThunk("BloodDetail", async ({ dispatch, componentName }, { rejectWithValue }) => {
    try {
        return await Api.get(`${BloodDetails}=${componentName}`)
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            return rejectWithValue(error.response.data)
        } else {
            dispatch(openAlert({ message: "Opps, It's seems something is wronge, Please try again later", color: "red" }))
            return rejectWithValue({ error })
        }
    }
})

export const UpdatedRequestList = createAsyncThunk("updatedRequestList", async ({ dispatch, id, input }, { rejectWithValue }) => {
    dispatch(closeForm())
    try {
        const result = await Api.patch(`${updatedRequestForm}/${id}`, input, {
            headers: {
                Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
            }
        })
        console.log(result.data);
        return result.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            return rejectWithValue(error.response.data);
        } else {
            dispatch(openAlert({ message: "Opps, It;s seems Something is wrong form our site, Please try again later", color: "red" }))
            return rejectWithValue(error)
        }
    }

})


export const DeleteRequestList = createAsyncThunk("deleteRequestList", async ({ dispatch, id }, { rejectWithValue }) => {
    try {
        const result = await Api.patch(`${deleteRequestFromList}/${id}`, {
            headers: {
                Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
            }
        })
        console.log(result.data);
        return result.data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            dispatch(openAlert({ message: error.response.data.message, color: "red" }))
            return rejectWithValue(error.response.data);
        } else {
            dispatch(openAlert({ message: "Opps, It;s seems Something is wrong form our site, Please try again later", color: "red" }))
            return rejectWithValue(error)
        }
    }
})