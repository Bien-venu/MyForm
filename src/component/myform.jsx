import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./myform.css";
import { useState } from "react";

const Myform = () => {
  const [address, setAddress] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(address);
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="firstname"
          name="first"
          onChange={(e) => handle(e)}
          placeholder="Enter first name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="lastname"
          name="last"
          onChange={(e) => handle(e)}
          placeholder="Enter last name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => handle(e)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="mb-3"
          name="password"
          type="password"
          onChange={(e) => handle(e)}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Myform;
