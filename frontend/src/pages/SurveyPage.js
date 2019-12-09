/*
SURVEY PAGE:
This file renders the survey page of the website. 
The survey is rendered from the JSON file in ../data/survey.js.
If you wish to modify the survey, you can go to https://surveyjs.io/
and copy and paste the JSON file into the survey creator to use their
user-friendly UI to modify the survey.

*/

import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import * as Survey from 'survey-react';
import data from '../data/survey.js';

import "survey-react/survey.css";
import '../styles/SurveyPage.css';
import {Button, Grid, Icon, Modal, Divider} from "semantic-ui-react";

class SurveyPage extends Component {
    // redirecting handles redirecting to data page
    constructor(props) {
        super(props);
        this.state = {
            redirecting: false,
            modalIsOpen: false
        };
        this.onComplete = this.onComplete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onHomePress = this.onHomePress.bind(this);
    }

    // Called when survey is submitted
<<<<<<< HEAD
    // Puts into the database the survey results + the userId
    onComplete = (result) => {
||||||| merged common ancestors
    onComplete = (result) => {
=======
    onComplete (result) {
>>>>>>> develop

        // user is appended to route to make put request
        const id = this.props.getId;
        axios.put(
            '/api/students/' + id,
            { survey: result.data },
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(res => {

            // If put request is successful, sets redirecting to true
            setTimeout( () => {
                this.setState({
                    redirecting: true
                })
            }, 3500)

        })
        .catch(err => {
            console.log(err);
        })

    };

    // Moves to the homepage
    onHomePress() {
        this.props.history.push('/Homepage/' + this.props.getId);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const model = new Survey.Model(data);
        const {redirecting} = this.state;

        // Redirects to data page when survey is complete
        if(redirecting) {
            return <Redirect to={'/data/' + this.props.getId} />
        }

        return (
            <div className="surveyjs">
                <Survey.Survey
                    model={model}
                    onComplete={this.onComplete}
                    className="survey"
                />
                <Divider hidden/>
                <Grid>
                    <Grid.Row centered stretched>
                        <Modal open={this.state.modalIsOpen} size="tiny" trigger={<Button basic color = "black"centered = {true} onClick={this.openModal}>
                                <Icon name='home'/> Home
                            </Button>}
                    >
                        <Modal.Header>
                            <Grid>
                                <Grid.Row centered>
                                    If you return to the homepage, you will lose your progress. Do you wish to
                                    proceed?
                                </Grid.Row>
                            </Grid>
                        </Modal.Header>
                        <Modal.Content className = "redirectModal">
                            <Modal.Actions>
                                <Grid columns={2}>
                                    <Grid.Row centered>
                                        <Grid.Column textAlign = 'center'>
                                            <Button  size = 'large' color='green' onClick={this.onHomePress}>
                                               <Icon name='checkmark' color= "black"/> <b className = "text">Yes</b>
                                            </Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign = 'center'>
                                        <Button size = 'large' color='red' onClick={this.closeModal}>
                                            <Icon name='remove' color = "black"/><b className = "text">No</b>
                                        </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Modal.Actions>
                        </Modal.Content>
                    </Modal>
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
                </div>
        );
    }
}

export default SurveyPage;