import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import ManageCart from './ManageCart';

const ManageOrder = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/order?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [user])

    return (
        <div >
            <h1 className='text-center fw-bolder mt-5'> Your Ordered Item </h1>
            <p className='text-center mb-5'>You can cancel this orders before it becomes Pending.</p>
            <div className='row mx-3 my-5'>
                {
                    services.map(service => <ManageCart key={service._id} service={service}>
                    </ManageCart>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;