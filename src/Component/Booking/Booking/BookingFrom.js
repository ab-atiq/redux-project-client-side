// import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate,  } from "react-router-dom";

const BookingFrom = (props) => {

  const { _id,nameProduct,image,price,details } = props.data;
  const { user } = useAuth();
  const initialInfo = { name: user.displayName, email: user.email, _id, nameProduct, image, price, details };
  
 

  const { register, handleSubmit } = useForm(initialInfo);

 



  const redirect = useNavigate();
  const onSubmit = (data) => {
    data.id = _id;
    data.name = nameProduct;
    data.img = image;
    data.price = price;
    data.details = details;
    
    if (data.email) {
      alert("Order Successful, Our agent will contact you shortly");
    }
    axios.post("http://localhost:5000/booking", data)
     .then((res) => { 
      
    });
    redirect("/payment");
    console.log(data);
  };

  return (
    <div
      className="border p-5 ms-3"
      style={{ boxShadow: "10px 10px 8px 10px #888888", borderRadius: "5px" }}
    >
      <h6 className="text-center">Fill the form below</h6>

      <form className="form_control" onSubmit={handleSubmit(onSubmit)}>
    
        <input
          className="w-100 p-1 my-2"
          {...register("name", { required: true })}
          placeholder="Name"
          defaultValue={user.displayName}
        />
        <input
          className="w-100 p-1 my-2"
          {...register("email",{ required: true })}
          placeholder="Email"
          defaultValue={user.email}
        />
        <input
          className="w-100 p-1 my-2"
          type="number"
          {...register("city")}
          placeholder="Number"
          required
        />
        <input
          className="w-100 p-1 my-2"
          type="text"
          {...register("address")}
          placeholder="address"
          required
        />
        <input
          className="w-100 p-1 my-2"
          type="text"
          {...register("city")}
          placeholder="City"
          required
        />

        <input
          className="w-100 p-1 my-2"
          type="text"
          {...register("state")}
          placeholder="State"
          required
        />
        {/* <input style={{backgroundColor: '#000050'}} className='btn btn-outline-light text-light  w-100' type="submit" value="Book Now" /> */}

        <a href="/payment">
          <button
            style={{ backgroundColor: "#000050" }}
            className="btn btn-outline-primary w-100 fw-bolder text-white"
          >
            Pay Now
          </button>
        </a>
      </form>
    </div>
  );
};

export default BookingFrom;
