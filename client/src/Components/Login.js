import React, { useState } from "react";

import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/Action/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="card-container">
        <Card
          className="text-center"
          border="info"
          style={{
            width: "30rem",
            margin: " 4rem auto ",
            height: "30rem",
          }}
        >
          <Card.Header>Welcome</Card.Header>
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
                  width: "20rem",
                }}
                variant="success"
                onClick={() => dispatch(login({ email, pass }, navigate))}
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
