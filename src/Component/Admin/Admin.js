import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';



const Admin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    
    const handelEmail = e => {
        setEmail(e.target.value)
    }
    const handelAdminFrom = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    setSuccess(true); 
                    
            }
        })

        e.preventDefault()
    }
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
            <div className='App w-75 my-5  mx-auto'>

                    {/* Aleart Massage  Show */}

                    {success && (
                    <div
                    className="  alert alert-warning alert-dismissible fade show"
                    role="alert"
                    >
                    <strong className="text-success">Admin Added SuccessFully </strong>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"

                    ></button>
                    </div>
                    )}

                    {/* Aleart Massage  Show */}

                    <Form onSubmit={handelAdminFrom}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Make Admin </Form.Label>
                        <Form.Control type="email" name='email' onBlur={handelEmail} placeholder=" admin email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                    </div>
            </div>
        </div>
    );
};

export default Admin;