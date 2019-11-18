import React, {
  Component
} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import '../styles/adminEntry.css'

class adminEntry extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    password: '',
    submittedPassword: ''
  }

  handleChange = (e, {
    name,
    value
  }) => this.setState({
    [name]: value
  })

  handleSubmit = () => {
    const {
      password
    } = this.state

    this.setState({

      submittedPassword: password
    })
    if (password == "admin") {
      alert("Successful Login")
      this.props.history.push('/');
    }else {
      alert("Wrong Password")
    }
    /*this.props.dispatch(signUp(formData)).then(({isAuthenticated}) => {
            if (isAuthenticated) {
                // Redirect to the home page if the user is authenticated
                this.props.router.push('/');
            }
        }*/
  }

  render() {
    const {
      password,
      submittedPassword
    } = this.state

    return ( <
      div style = {
        {
          height: '75vh',
          background: "white"
        }
      } >
      <
      Grid centered columns = {
        2
      } >
      <

      Grid.Column centered >
      <
      Header as = "h1"
      textAlign = "center" >
      <
      div id = 'container' > Admin Login < /div> < /
      Header > <
      Segment >
      <

      Form onSubmit = {
        this.handleSubmit
      } >
      <
      Form >

      < Form.Input

      //fluid
      icon = "lock"
      iconPosition = "left"
      //placeholder="Password"
      type = "password"
      placeholder = 'Password'
      name = 'password'
      value = {
        password
      }
      onChange = {
        this.handleChange
      } />


    <Form.Button Button color = "grey"
      fluid size = "large"
      content = 'Submit' / >
      </Form>
      < /Form >
    </Segment>
      < /Grid.Column >

      </Grid>


      <
      /div>
    )
  }
}

export default adminEntry