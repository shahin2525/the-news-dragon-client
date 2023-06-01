import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Container className="mx-auto w-25 m-4">
      <h1>Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter url"
            required
          />
        </Form.Group>
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
        <Form.Group
          onClick={handleAccepted}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <br></br>
        <Form.Text className="text-danger">
          {/* this is for error field */}
        </Form.Text>
        <br></br>
        <Form.Text className="text-secondary">
          Already Have An Account ?
          <Link className="text-info" to="/login">
            Login
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
