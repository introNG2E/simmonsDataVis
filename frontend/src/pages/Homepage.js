import React, { useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import {Grid, Image, Header, Container, Button, Divider, Segment, GridColumn} from 'semantic-ui-react'
import '../styles/Homepage.css'

function Homepage(props) {

    function onDataPress() {
        props.history.push('/data/' + props.getId);
    }

    function onSurveyPress() {
        props.history.push('/survey/' + props.getId);
    }

    return (
        <div className="homePage">
            <Divider/>
            <Header as='h1' textAlign='center'>Engineering Out-Of-Class Activity Decision Support System</Header>
            <Divider/>
            <Segment inverted color="grey" padded="very">
                <p>The OOCA Decision Support System aims at guiding students (i.e. especially
                    undergraduate engineering) on making decisions on professional development plan
                    and support educators, program managers and policy makers on developing
                    strategic plan for engineering programs. This system is developed as part of the
                    NSF project: CAREER:Investigating Co-Curricular Participation of Students
                    Underrepresented in Engineering. The full project description can be found on: &nbsp;
                    <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1351156&HistoricalAwards=false">here
                    </a>.</p>
                <p>This system uses public data and survives by your contributions. Please take your time
                    to complete data the survey. By doing so, you are helping to improve the system. Please note
                    that
                    you need to be at least 18 years old to take this survey.</p>
            </Segment>
            <Divider/>
            <Divider/>
            <Grid columns='2'>
                <Grid.Column>
                    <Button
                        onClick={onDataPress}
                        size='massive'
                        className='router'>
                        &nbsp; Data &nbsp;
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button
                        onClick={onSurveyPress}
                        size='massive'
                        className='router'>
                        Survey
                    </Button>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Homepage;