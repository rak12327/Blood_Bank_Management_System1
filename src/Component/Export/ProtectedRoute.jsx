import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    const user = localStorage.getItem("token");

    return user ? (children) : <Navigate to="/sign-in" replace state={{ path: location.pathname }} />
}

export const CheckRoute = ({ children }) => {
    const user = localStorage.getItem("token");
    const { state } = useLocation();

    return user ? <Navigate to={state.path || '/'} replace /> : (children)
}