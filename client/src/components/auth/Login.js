import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import AuthContext from '../../context/authContext';

const Login = ({ history }) => {
  // const authContext = useContext(AuthContext);

  // const { setIsAuthenticated } = authContext;

  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Submit',
  });

  const { email, password, buttonText } = values;

  const handleChange = (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/login`,
      data: { email, password },
    })
      .then((response) => {
        // setIsAuthenticated();
        console.log('LOGIN SUCCESS', response);
        // save the response (user, token) localstorage/cookie
        // authenticate(response, () => {
        //   setValues({
        //     ...values,
        //     name: '',
        //     email: '',
        //     password: '',
        //     buttonText: 'Submitted',
        //   });
        //   toast.success(`Hey ${response.data.user.name}, Welcome back!`);
        //   isAuth() && isAuth().role === 'admin'
        //     ? history.push('/admin')
        //     : history.push('/private');
        // });
      })
      .catch((error) => {
        console.log('LOGIN ERROR', error.response.data);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const loginForm = (
    <Form>
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
      <div>
        <Button color="primary" onClick={clickSubmit}>
          {buttonText}
        </Button>
      </div>
    </Form>
  );

  return (
    <div className="col-md-6 offset-md-3">
      <ToastContainer />
      {/* {isAuth() ? <Redirect to="/" /> : null} */}
      <h1 className="p-5 text-center">Login</h1>
      {loginForm}
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

export default Login;
