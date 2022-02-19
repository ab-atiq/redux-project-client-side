import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewService = ({ service }) => {
    const { Name, number,about} = service;
    return (
        <div className='col-lg-3 col-md-6 col-sm-6 my-2  '>
         <Card style={{ width: '18rem' }}>
        <Card.Body>
                    <Card.Title className='text-center'> <i className="fas fs-3 fa-child"></i>  {Name}  </Card.Title>
                    <small className='text-center d-block mb-4'>Customer</small>
                    <Card.Subtitle className="mb-2 text-warning text-center"><i className="fas fa-star"></i> Rating <span className='fw-bolder'>{ number}</span></Card.Subtitle>
                        <Card.Text className='text-center'>
                              { about }
                        </Card.Text>
        </Card.Body>
        </Card>
        </div>
    );
};

export default ReviewService;