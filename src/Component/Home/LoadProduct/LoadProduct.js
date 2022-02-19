import React from 'react';
import Product from '../../Product/Product';

const LoadProduct = () => {
    return (
        <div className='mt-5'>
            <h1 className="mt-5 text-center fw-bolder">Which Mac is right for you?</h1>
            <Product></Product>
        </div>
    );
};

export default LoadProduct;