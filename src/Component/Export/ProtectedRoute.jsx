import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useParams } from "react-router-dom"

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