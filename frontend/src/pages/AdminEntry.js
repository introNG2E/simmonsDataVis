import React, { Component } from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
//import SimpleReactValidator from 'simple-react-validator';
import { BrowserRouter as Router, Route } from "react-router-dom";
class AdminEntry extends Component {
  constructor(props) {
          super(props);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
  state = { password: '', submittedName: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password } = this.state

    this.setState({ submittedName: name, submittedPassword: password })
    if(password == "admin"){
      alert("Successful Login")
      this.props.history.push('/Homepage');
    }
    /*this.props.dispatch(signUp(formData)).then(({isAuthenticated}) => {
            if (isAuthenticated) {
                // Redirect to the home page if the user is authenticated
                this.props.router.push('/');
            }
        }*/
  }

  render() {
    const { name, password, submittedName, submittedPassword } = this.state

    return (
      <div>
      <Grid centered columns={2}>
        <Grid.Column>
      <Header as="h1" textAlign="center">
        <div id = 'admin'>Admin Login</div>
      </Header>
        <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>

            <Form.Input

              //fluid
              icon="lock"
              iconPosition="left"
              //placeholder="Password"
              type="password"
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button Button color="blue" fluid size="large" content='Submit' />
          </Form.Group>
        </Form>
        </Segment>
        </Grid.Column>
      </Grid>


      </div>
    )
  }
}

export default AdminEntry
