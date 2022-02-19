import React from 'react';
import { Link } from 'react-router-dom';

const MiddleTwo = () => {
    return (
        <div className='mt-5 container' style={{ backgroundColor: "#fbfbfd", }}>

            <div className="row" >
                <div className="col-md-6 p-5 col-sm-12">
                    <img className='img-fluid' src="https://www.apple.com/v/mac/home/bk/images/overview/get-more/apple-one/bundle__gaazdu9x3jqu_large.jpg" alt="" />
                </div>
                <div className="col-md-6 p-5 col-sm-12 ">
                    <img className='d-block mx-auto img-fluid ' src="https://www.apple.com/v/mac/home/bk/images/overview/get-more/apple-one/apple_one_logo__cj3a404ir8mu_large.jpg" alt="" />
                    <h3 className='d-flex justify-content-center align-items-center pt-5'>Bundle up to six Apple services.And enjoy more for less.</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <h3> <Link to="#"> Try it free</Link></h3>
                        </div>
                        <div className="col-md-5">
                            <h3> <Link to="#">Learn more </Link></h3>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MiddleTwo;