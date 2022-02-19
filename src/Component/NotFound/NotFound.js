import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        // this is not found page 
        <div className="bg-light py-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center fw-bold" style={{ 'fontSize': '8rem' }}>404</h1>
            <p className="text-center fw-light">Page Not found.</p>

            <Link to="/" className="fw-bold text-center" style={{ "textDecoration": "none" }}>Back to home</Link>
        </div>
    );
};

export default NotFound;