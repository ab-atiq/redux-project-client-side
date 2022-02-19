import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';



const Product = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    return (
        <div className='mx-3 mt-5 '>

            <h1 style={{ color: '#03a9f4' }} className='text-center fw-bolder my-3'> All  Product </h1>
            <hr className='mx-auto w-25 mb-5' />

            <div className='row '>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Product;
