import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {

    // use navigate 

    const navigate = useNavigate();

    // handle submit button for contact us 

    const handleSubmit = () => {
        alert('Your Message has been sent')
        navigate('/home')
    }


    return (

        // contact us form 

        <div className='App'>
            <div className="wrapper rounded d-flex align-items-stretch ">

                <div className="contact-form mx-auto my-5 p-5 " style={{ boxShadow: '10px 10px 8px 10px #888888', borderRadius: '5px', }}>
                    <div className="h3">Contact Us</div>
                    <form>
                        <div className="form-group pt-3"> <label htmlFor="message">Message</label> <textarea style={{ backgroundColor: '#e7e7e7' }} name="message" className="form-control" required></textarea> </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                            <div className="form-group pt-lg-2 pt-3 mx-2"> <label htmlFor="name">Your Name</label> <input style={{ backgroundColor: '#e7e7e7' }} type="text" name="name" className="form-control" required /> </div>
                            <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name">Your Email</label> <input style={{ backgroundColor: '#e7e7e7' }} type="email" name="email" className="form-control" required /> </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                            <Link to="/home" className="btn btn-outline-warning"> Cancel </Link>
                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handleSubmit}> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">Thank You <span className="fas fa-heart"></span> </h5> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="ps-2">Thank You for sharing your views with us. We will get back to you as soon as possible.</div>
            </div>
        </div>
    </div>
</div> */}
        </div>
    );
};

export default ContactUs;