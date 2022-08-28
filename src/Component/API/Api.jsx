import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:8800"
    baseURL: process.env.REACT_APP_API_LINK
});