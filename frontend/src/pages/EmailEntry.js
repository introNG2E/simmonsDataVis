import React, {useContext, useState, useEffect} from 'react';

import {Button, Header, Form, Grid, Divider, Segment, Label, Transition, List, Loader, Dimmer} from 'semantic-ui-react';

import axios from 'axios'

import '../styles/EmailEntry.css'

function EmailEntry(props) {

    /*NOTE: Autocomplete form-fields is OFF for testing purposes. Turn on before deployment*/

    const [errors, setErrors] = useState(''); //register error message
    const [errorsL, setErrorsL] = useState(''); //login error message
    const [registerInput, setregisterInput] = useState('');
    const [loginInput, setLoginInput] = useState('');
    const [redirecting, setRedirecting] = useState(false);
    const [isVisibleRegErr, setIsVisibleRegErr] = useState(false); //If the register error is visible
    const [isVisibleLoginErr, setIsVisibleLoginErr] = useState(false); //If the login error is visible
    const [copy,setCopy] = useState(''); //used to make copy of register error message
    const [copyL,setCopyL] = useState(''); //used to make copy of login error message
    const [regLoad, setRegLoad] = useState (false);
    const [loginLoad, setLoginLoad] =useState(false);

    //Used for manual error-checking/testing in console
    useEffect(() => {
        console.log("Register error is visible? " + isVisibleRegErr + "\nError message: " + "'" + errors + "'");
        if (isVisibleRegErr === true) {
            console.log('Currently: Register errors are visible.');
        } else if (isVisibleRegErr === false) {
            console.log("Currently: Register Errors are NOT visible.");
        }
    }, [isVisibleRegErr]);

    useEffect(() => {
        console.log("Login error is visible? " + isVisibleLoginErr + "\nError message: " + "'" + errorsL + "'");
        if (isVisibleLoginErr === true) {
            console.log('Currently: Login errors are visible.');
        } else if (isVisibleLoginErr === false) {
            console.log("Currently: Login errors are NOT visible.");
        }
    }, [isVisibleLoginErr]);

    function stringErr(string) {
        return string.slice(0, string.length);
        /*Used to keep track of the displayed error.
        Transition visibility is dependent on a valid error being displayed.
        If the error message is reset to null, then on the transition close,
        the pop-up label will shrink quite a bit, because there is no assigned text/error.
        This functions allows the text to remain visible until the transition is closed.
        When the transition is closing, the label will display a "copy" of the original error string*/
    }

    function handleRegisterErrors() {
        if (errors !== "") {
            setCopy(stringErr(errors));
        } else if (errors === "") {
            setCopy(stringErr(copy));
        }
        setRegLoad(false); //disables the loader and dimmer for register
        setErrors(''); //clears the error message
        setIsVisibleRegErr(false); //closes the error pop up
    }

    function handleLoginErrors() {
        if (errorsL !== "") {
            setCopyL(stringErr(errorsL));
        } else if (errorsL === "") {
            setCopyL(stringErr(copyL));
        }
        setLoginLoad(false); //disables the loader and dimmer for login
        setErrorsL(''); //clears the error message
        setIsVisibleLoginErr(false); //closes the error pop up
    }

    function registerChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setregisterInput(e.target.value);
        if (loginInput != null) {
            setLoginInput(''); //removes any text in the login form
        }
    }

    function loginChange(e) {
        handleRegisterErrors();
        handleLoginErrors();
        setLoginInput(e.target.value);
        if (registerInput != null) {
            setregisterInput(''); //removes any text in the register form
        }
    }

    async function onRegister(e) {
        setRegLoad(true); //displays the loader
        handleLoginErrors();
        //handleRegisterErrors();
        if (loginInput != null) {//removes any text in the login input form
            setLoginInput('');
        }
        if (errorsL != null) {//closes the popup for login
            setErrorsL('');
        }
        const response = await axios.post(
            '/api/students/register',
            {email: registerInput},
            {headers: {'Content-Type': 'application/json'}}
        )
            .then(function (response) {
                console.log(response);
                // props.userLogged(response.data);
                setRedirecting(true);
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.data.emailFound) {
                    console.log(error.response.data.emailFound);
                    setErrors(error.response.data.emailFound);
                    console.log(errors);
                } else {
                    setErrors(error.response.data.email);
                }
                setIsVisibleRegErr(true);
                setCopy(stringErr(errors));
            });
        setRegLoad(false);
    }

    async function onLogin(e) {
        setLoginLoad(true); //displays the loader
        handleRegisterErrors();
        //handleLoginErrors();
        if (registerInput != null) {//removes any text from the register input form
            setregisterInput('');
        }
        const response = await axios.post(
            '/api/students/login',
            {email: loginInput},
            {headers: {'Content-Type': 'application/json'}}
        ).then(function (response) {
            setRedirecting(true);
        })
            .catch(function (error) {
                if (error.response.data.emailNotFound) {
                    setErrorsL(error.response.data.emailNotFound);
                } else {
                    setErrorsL(error.response.data.email);
                }
                setIsVisibleLoginErr(true);
                setCopyL(stringErr(errorsL));
            });
        setLoginLoad(false);
    }

    if (redirecting) {
        return (
            <div className='EmailEntry'>
            <Divider/>
            <Divider/>
            <Header as='h1' className='welcome'>
                A link to the survey has been sent to your email
            </Header>
            <Divider/>
            <Divider/>
        </div>
        )
    } else {
        return (
            <div className='EmailEntry'>
                <Header as='h1' className='welcome'>
                    Welcome to our survey
                </Header>
                <Header as='h3' className='welcome'>
                    New users please register with your email and fill out a survey
                </Header>
                <Header as='h3' className='welcome'>
                    Returning users can edit their survey and view their results
                </Header>
                <Divider/>
                <Divider/>
                <Grid columns={2} divided className='emailForms'>
                    <Grid.Row>
                        <Grid.Column stretched>
                            <Form className='emailInput' onSubmit={onRegister}>
                                <Header as='h5'>
                                    I am a new user
                                </Header>
                                <Form.Field className='emailInput'>
                                    <label>Email Address</label>
                                    <Form>
                                        {/*nested form tag keeps loading element IN the input field*/}
                                        <Dimmer active={regLoad} inverted>
                                            <Loader disabled={!regLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Email'
                                            onChange={registerChange}
                                            onClick={registerChange}
                                            value={registerInput}
                                            autoComplete="off"
                                        />
                                    </Form>
                                </Form.Field>
                            </Form>
                            <List>
                                <List.Item>
                                    <Grid centered>
                                        <Grid.Column textAlign="center">
                                            <Button type='submit' onClick={onRegister} disabled={isVisibleRegErr}>
                                                Submit
                                            </Button>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item>
                                    <Transition
                                        as={List}
                                        duration={350}
                                        divided
                                        verticalAlign='middle'
                                        animation={'zoom'}
                                        visible={isVisibleRegErr}
                                    >
                                        <Grid>
                                            <Grid.Column textAlign="center">
                                                <Label pointing color='red' size="small">
                                                    <Segment.Inline size="small" color='red'>
                                                        {isVisibleRegErr ? errors : copy}
                                                    </Segment.Inline>
                                                </Label>
                                            </Grid.Column>
                                        </Grid>
                                    </Transition>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column stretched>
                            <Form className='emailInput' onSubmit={onLogin}>
                                <Header as='h5'>
                                    I have submitted a survey
                                </Header>
                                <Form.Field className='emailInput'>
                                    <label>Email Address</label>
                                    <Form>
                                        <Dimmer active={loginLoad} inverted>
                                            <Loader disabled={!loginLoad} inverted size="mini" inline></Loader>
                                        </Dimmer>
                                        <input
                                            placeholder='Email'
                                            onChange={loginChange}
                                            onClick={loginChange}
                                            value={loginInput}
                                            autoComplete="off"
                                        />
                                    </Form>
                                </Form.Field>
                            </Form>
                            <List>
                                <List.Item>
                                    <Grid centered>
                                        <Grid.Column textAlign="center">
                                            <Button type='submit' onClick={onLogin} disabled={isVisibleLoginErr}>
                                                Submit
                                            </Button>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item>
                                    <Transition
                                        duration={350}
                                        divided
                                        verticalAlign='middle'
                                        animation={'zoom'}
                                        visible={isVisibleLoginErr}
                                    >
                                        <Grid>
                                            <Grid.Column textAlign="center">
                                                <Label pointing color='red' size="small">
                                                    <Segment.Inline size="small" color='red'>
                                                        {isVisibleLoginErr ? errorsL : copyL}
                                                    </Segment.Inline>
                                                </Label>
                                            </Grid.Column>
                                        </Grid>
                                    </Transition>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default EmailEntry;
