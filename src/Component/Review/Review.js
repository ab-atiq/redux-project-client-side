import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/user-review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })

        console.log(data);
    }
    
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className='  my-5 p-5 ' style={{ boxShadow: '10px 10px 8px 10px #888888', borderRadius: '5px', }}>
                    <h1 className='text-center py-4'>Add Review Listing</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ backgroundColor: '#e7e7e7', border: 'none', borderRadius: '4px' }} className='w-100 my-2 p-2' Placeholder="Your Name" {...register("Name")
                        } />
                        <br />
                        <input style={{ backgroundColor: '#e7e7e7', border: 'none', borderRadius: '4px' }} type="number" min="1" max='5' className='w-100 my-2 p-2' Placeholder="Review Points(out of 5)" {...register("number",)} />
                        <br />
                        <textarea style={{ backgroundColor: '#e7e7e7', border: 'none', borderRadius: '4px' }} className='w-100 my-2 p-2' Placeholder="" {...register("about")} />
                        <br />

                        <br />
                        <input className='w-100 my-2 p-2 btn btn-warning' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;