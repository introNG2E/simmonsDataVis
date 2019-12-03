import React, {Component, useState} from 'react';
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
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onHomePress = this.onHomePress.bind(this);
    }
    json = data;


    // Called when a question in the survey is changed/answered
    onValueChanged = (result) => {

        console.log("value change!");
    }

    // Called when survey is submitted
    onComplete = (result) => {
        // console.log("Complete! "+ JSON.stringify(result.data));

        // user is appended to route to make put request
        const id = this.props.getId;
        axios.put(
            '/api/students/' + id,
            { survey: result.data },
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(res => {
            console.log(res);

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

    onHomePress() {
        this.props.history.push('/Homepage/' + this.props.getId);
    }

    openModal() {
        console.log('wow');
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const model = new Survey.Model(this.json);
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
                    onValueChanged={this.onValueChanged}
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