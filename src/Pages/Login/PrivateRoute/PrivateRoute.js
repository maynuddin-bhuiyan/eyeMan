import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {


    const { user, isLogindata } = useAuth();
    let location = useLocation();
    if (isLogindata) { return <CircularProgress color="inherit" /> }

    if (user.email) {
        return children;

    }

    return <Navigate to="/login" state={{ from: location }} replace />






};

export default PrivateRoute;