import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/catagori/0";
  console.log(location);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <Container className="mx-auto w-25 m-4">
      <h1>Please Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text className="text-danger">
          {/* this is for error field */}
        </Form.Text>
        <br></br>
        <Form.Text className="text-secondary">
          Dont’t Have An Account ?
          <Link className="text-info" to="/register">
            Register
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
