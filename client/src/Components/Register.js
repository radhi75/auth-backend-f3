import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { register } from "../redux/Action/authActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    dispatch(register({ email, pass }, navigate));
  };
  return (
    <div>
      <Card
        className="text-center"
        border="info"
        style={{
          width: "30rem",
          margin: " 4rem auto ",
        }}
      >
        <Card.Header>creat account</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </Form.Group>

            <Button
              style={{
                width: "15rem",
              }}
              variant="success"
              onClick={handleRegister}
            >
              sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
