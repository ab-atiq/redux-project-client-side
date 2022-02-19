import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id,nameProduct,image,price }  = service;
    return (

 <div className=' col-lg-3  col-md-6  col-sm-12 my-2 ' >
       <div >
       <Link className='text-decoration-none' to={`/booking/${_id}`}>
       <Card className='h-100' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title className='text-center text-dark'>{nameProduct}</Card.Title>
        
            <Card.Title className="text-center fs-3 " style={{color:'#000050'}}>Form ${price}</Card.Title>
            <Link to={`/booking/${_id}`}><Button   className="mx-auto d-block" variant="primary">Buy Now</Button></Link>
        </Card.Body>
        </Card>
       </Link>
       </div>
 </div>
    );
};

export default Service;