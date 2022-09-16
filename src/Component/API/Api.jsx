import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:8800"
    baseURL: process.env.REACT_APP_API_LINK
});

const signUpLink = '/api/v1/signup';
const userLink = '/api/v1/user'
const signInLink = "/api/v1/signin";
const requestFormLink = "/api/v1/request-form"
const contactFormLink = `/api/contactUs`
const updateUserLink = "/api/v1/update"
const changePasswordLink = "/api/v1/change-password"
const deleteUserLink = "/api/v1/delete"
const forgotPasswordLink = '/api/v1/forgot-password'
const resetPasswordLink = '/api/v1/reset-password'

export { signUpLink, userLink, signInLink, requestFormLink, contactFormLink, updateUserLink, changePasswordLink, deleteUserLink, forgotPasswordLink, resetPasswordLink }