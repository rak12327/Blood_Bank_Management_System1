import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useParams } from "react-router-dom"
import { openAlert } from '../Redux/Model/AlertSlice';

export const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    const userData = useSelector(state => state.user)
    return userData.user ? (children) : <Navigate to="/sign-in" replace state={{ path: location?.pathname }} />
}

export const CheckRoute = ({ children }) => {
    const { state } = useLocation();
    const userData = useSelector(state => state.user)

    return userData.user ? <Navigate to={state?.path || '/'} replace /> : (children)
}

export const ProtectResetPassword = ({ children }) => {
    const params = useParams();

    return params.token.length > 10 ? (children) : <Navigate to={'/'} />
}

export const CheckUserData = ({ children }) => {
    const data = useSelector(state => state.user?.user)
    const { requestData } = useSelector(state => state.requestModel)


    const dispatch = useDispatch();
    let userData = false;

    if (data?.phoneNumber && data?.adhaarNumber &&
        data?.age && data?.address && data?.pinCode &&
        data?.gender) {
        userData = true
    }


    useEffect(() => {
        if (!userData) {
            dispatch(openAlert({ message: "Your profile is not updated. Please Update your profile page.", color: "yellow" }))
        }
    }, [])

    return userData ? !requestData?.componentName ? <Navigate to={'/Request'} /> : children : <Navigate to={'/profile/user'} />
}