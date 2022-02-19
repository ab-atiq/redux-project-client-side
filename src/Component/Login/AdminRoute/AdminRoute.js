import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();
    if (isLoading) { <Spinner animation="border" /> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;