import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./myform.css";
import { useState } from "react";

const Myform = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const

  const handle = (e) => {
    e.preventDefault();
    console.log(`
    my first name is ${first} 
    my last name is ${last} 
    my email is ${email} 
    my password is ${pass}`);
  };

  return (
    <Form onSubmit={handle}>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="firstname"
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Enter first name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="lastname"
          onChange={(e) => setLast(e.target.value)}
          placeholder="Enter last name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="mb-3"
          type="password"
          onChange={(e) => setPass(e.target.value)}
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
