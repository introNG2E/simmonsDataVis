import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import '../styles/login.css'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from "semantic-ui-react";

export default function Login(props) {
  const [password, setPassword] = useState("");

  function validateForm() {
    return password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(password === "admin"){
      props.userHasAuthenticated(true);//this initializes the isAuthenticated state variable to false, as in the user is not logged in
      props.history.push("/adminpanel");
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form controlId="password" bsSize="large">
          <Form>Password</Form>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}