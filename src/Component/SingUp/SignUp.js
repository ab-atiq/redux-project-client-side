import React from "react";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [signupData, setSignupData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();

  const handelSignUP = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signupData };
    newSignUpData[field] = value;
    setSignupData(newSignUpData);
  };

  const handelFrom = (e) => {
    registerUser(
      signupData.email,
      signupData.password,
      signupData.name,
      navigate
    );

    if (signupData.password !== signupData.password2) {
      alert("Your Password Did not Match");
      return;
    }

    e.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto mb-5">
        <h1 style={{ color: "#03a9f4" }} className="text-center mt-3">
          Register Here
        </h1>
        <hr className="mx-auto w-25 mb-5" />
        <div
          className=" mx-2 p-4 mt-5 "
          style={{ backgroundColor: "#D3D3D3", borderRadius: "3%" }}
        >
          {!isLoading && (
            <Form onSubmit={handelFrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onBlur={handelSignUP}
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handelSignUP}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handelSignUP}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password2"
                  onBlur={handelSignUP}
                  placeholder="Retype Password"
                  required
                />
              </Form.Group>

              <Link to="/login">
                <p> Login Here</p>
              </Link>
              <Button
                className="w-100 text-uppercase btn-outline-success"
                variant=""
                type="submit"
              >
                SignUp
              </Button>
            </Form>
          )}
          {isLoading && <Spinner animation="border" />}
          {user?.email && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong className="text-success">
                User Created SuccessFully
              </strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          {authError && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              {authError}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
