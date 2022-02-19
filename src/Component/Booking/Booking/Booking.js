import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import BookingFrom from './BookingFrom';
import { Link, useParams } from 'react-router-dom';


const Booking = () => {
    const { BookingId } = useParams()
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${BookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [BookingId])

    return (
        <div className="container my-5" >
            <h1 className='fw-bolder text-center mt-3 mb-5 ' style={{ color: '#000050', fontSize: '55px' }}>Book Now  <hr className='w-25 mx-auto ' /></h1>
            <div className="row">
                <div className="col-md-6"  >

                    <Card className="text-center p-2">
                        <Card.Body>
                            <Card.Title> <span className='fs-3' style={{ color: '#000050' }}> Name:  </span>  {service.nameProduct}</Card.Title>
                            <Card.Text>
                                <img className='w-75' src={service.image} alt="" />
                            </Card.Text>
                            <Card.Text>
                                <span className='fs-3' style={{ color: '#000050' }}> Product Details:  </span>
                                {service.details}
                            </Card.Text>
                            <Link to="/product"><Button style={{ backgroundColor: '#000050', color: '#FFF' }} variant="">Go Back</Button></Link>
                        </Card.Body>
                    </Card>

                </div>

                <div className="col-md-6">
                    <BookingFrom data={service} ></BookingFrom>
                </div>
            </div>
        </div>
    );
};

export default Booking;