import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Register = (props) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Submit',
  });

  const { name, email, password, buttonText } = values;
  const handleChange = (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      // http://localhost:8000/api/register
      url: `${process.env.REACT_APP_API}/register`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log('REGISTER SUCCESS', response);
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          buttonText: 'Submitted',
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log('REGISTER ERROR', error.response.data);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const registerForm = (
    <Form>
      <FormGroup>
        <Label className="text-muted">Name</Label>
        <Input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          className="form-control"
        />
      </FormGroup>
      <FormGroup>
        <Label className="text-muted">Email</Label>
        <Input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          className="form-control"
        />
      </FormGroup>
      <FormGroup>
        <Label className="text-muted">Password</Label>
        <Input
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
          className="form-control"
        />
      </FormGroup>

      <Button color="primary" onClick={clickSubmit}>
        {buttonText}
      </Button>
    </Form>
  );

  return (
    <div className="col-md-6 offset-md-3">
      <ToastContainer />
      {/* {isAuth() ? <Redirect to="/" /> : null} */}
      <h1 className="p-5 text-center">Register</h1>
      {registerForm}
      <br />
      <Link
        to="/auth/password/forgot"
        className="btn btn-sm btn-outline-danger"
      >
        Forgot Password
      </Link>
    </div>
  );
};

export default Register;
