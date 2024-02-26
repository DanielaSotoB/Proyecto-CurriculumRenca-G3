import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ canActivate, redirectPath = '/', ...props }) => {
    return canActivate ? <Route {...props} /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
