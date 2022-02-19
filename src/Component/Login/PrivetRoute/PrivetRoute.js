import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { <Spinner animation="border" /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;