import React from "react";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, googleLogIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handelChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handelFrom = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handelGoogleLogin = () => {
    googleLogIn(location, navigate);
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto mb-5">
        <h1 style={{ color: "#03a9f4" }} className="text-center mt-3">
          Please Login
        </h1>
        <hr className="mx-auto w-25 mb-5" />
        <div
          className=" mx-2 p-4 mt-3 "
          style={{ backgroundColor: "#D3D3D3", borderRadius: "3%" }}
        >
          {!isLoading && (
            <Form onSubmit={handelFrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handelChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handelChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Link to="/signup">
                <p>New User Register here</p>
              </Link>
              <Button
                className="mb-3 w-100 text-uppercase btn-outline-success"
                variant=""
                type="submit"
              >
                Log-In
              </Button>
            </Form>
          )}
          <Button
            className=" w-100 text-uppercase btn-outline-primary"
            onClick={handelGoogleLogin}
            variant=""
            type="submit"
          >
            Google Log-in
          </Button>
          {isLoading && <Spinner animation="border" />}
          {user?.email && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong className="text-success">Login SuccessFully</strong>
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

export default Login;
