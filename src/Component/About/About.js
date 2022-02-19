import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const About = () => {
    return (
        <div className=''>
            <div className="py-5 my-5 App fw-bolder" style={{ color: "#000050" }}>
                <h1 > Working On this Page Back to  Coming Very Soon</h1>
            </div>
            <Link to="/">
                <Button className='mx-auto d-block m-5'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default About;