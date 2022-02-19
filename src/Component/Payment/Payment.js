import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Payment = () => {

    return (
        <div>
            <h1 className='App fw-bolder mt-5' style={{ color: "#000050" }}>Payment Option Coming Soon </h1>

            <Link to="/manage">
                <Button className='mx-auto d-block m-5'>My Order</Button>
            </Link>
        </div>
    );
};

export default Payment;