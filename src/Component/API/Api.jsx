import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:8800"

    baseURL: process.env.REACT_APP_API_LINK,
    // headers: {
    //     Authorization: `Bearer ` + JSON.parse(localStorage.getItem("token"))
    // },
});

export const signUpLink = '/api/v1/signup';
export const signInLink = "/api/v1/signin";
export const userLink = '/api/v1/user'
export const updateUserLink = "/api/v1/update"
export const changePasswordLink = "/api/v1/change-password"
export const deleteUserLink = "/api/v1/delete"
export const forgotPasswordLink = '/api/v1/forgot-password'
export const resetPasswordLink = '/api/v1/reset-password'

export const contactFormLink = `/api/contactUs`

export const requestFormLink = "/api/v1/request-form"
export const requestFormList = process.env.REACT_APP_REQUEST_FROM
export const updatedRequestForm = process.env.REACT_APP_REQUEST_FROM;
export const deleteRequestFromList = process.env.REACT_APP_REQUEST_FROM;
export const requestFormComplete = process.env.REACT_APP_REQUEST_FORM_COMPLETE;
export const requestFormNotComplete = process.env.REACT_APP_REQUEST_FORM_NOT_COMPLETE;
export const ComponentName = process.env.REACT_APP_COMPONENT_NAME;
export const BloodDetails = process.env.REACT_APP_BLOOD_DETAILS;
