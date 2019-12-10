
//In Progress of Adding CSV button and download button
import React, { Component } from 'react';
import { Button, Header, Form, Grid, Divider, Segment, Label, Icon } from 'semantic-ui-react'
import { redirect } from 'react-router-dom'
import SpiderChart from '../components/SpiderChart'
import data from '../data/data.js'
import '../styles/DataPage.css'
import axios from 'axios';
import json2csv from "json2csv";
//import { CSVLink } from "react-csv";
class StatisticsPage extends Component {

    state = {
        gender: "", // 1: Woman, 2: Man, 3: Trans, 4: Other, 5: I don't want to respond
        race: "", // 1: Asian, 2: Black, 3: Hispanic, 4: Pacific, 5: White, 6: Other, 7: Mix
        major: "", // 1: General Engineering, 2: Civil Engineering, 3: Construction
        dataSets: [], // This should hold all of the data sets to be passed down and depicted in SpiderChart.js
        color: 0, // index variable to cycle through colors.
        numObservations: 0,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            gender: '-1',
            raceEthnicity: '-1',
            major: '-1',
            dataSets: [],
            color: 0,
            numObservations: 0
        };
    }

    // Creates a new dataSet array to push onto the dataSets array 
    // that gets passed onto SpiderChart.js. T
    addDataSet(e){
        //var filteredData = data;
        var filteredData = [];

        axios.get(
            'http://localhost:8080/api/students/'
        ).then(res => {
            filteredData = res.data;
            console.log(filteredData);
            if (this.state.gender != -1){
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.gender == this.state.gender);
                })
            }
            if (this.state.raceEthnicity != -1){
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.raceEthnicity == this.state.raceEthnicity);
                })
            }
            if (this.state.major != -1){
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.major == this.state.major);
                })
            }
            console.log(filteredData);
            var sumE2 = 0;
            var sumE3 = 0;
            var sumE4 = 0;
            var sumE5 = 0;
            var sumE6 = 0;
            var sumE7 = 0;
            var sumE8 = 0;
            var sumE9 = 0;
            var newDataSet = [];
            var size = filteredData.length;
            this.setState({
                numObservations: size
            })
            for (var entry in filteredData){
                sumE2 += filteredData[entry].survey.E2; 
                sumE3 += filteredData[entry].survey.E3; 
                sumE4 += filteredData[entry].survey.E4; 
                sumE5 += filteredData[entry].survey.E5; 
                sumE6 += filteredData[entry].survey.E6; 
                sumE7 += filteredData[entry].survey.E7; 
                sumE8 += filteredData[entry].survey.E8; 
                sumE9 += filteredData[entry].survey.E9;  
            }
            var colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    
            newDataSet = [{
                data: {
                    gender: this.state.gender,
                    raceEthnicity: this.state.raceEthnicity,
                    major: this.state.major,
                    E2: (sumE2/size)/4,
                    E3: (sumE3/size)/4,
                    E4: (sumE4/size)/4,
                    E5: (sumE5/size)/4,
                    E6: (sumE6/size)/4,
                    E7: (sumE7/size)/4,
                    E8: (sumE8/size)/4,
                    E9: (sumE9/size)/4,
                },
                meta: {color: "red"}
            }]
            console.log("addDataSet called: ");
            console.log('Gender: ' + this.state.gender);
            console.log('Race: ' + this.state.raceEthnicity);
            console.log('Major: ' + this.state.major);
            if (size == 0){
                return false;
            }
            this.setState({
                dataSets: this.state.dataSets.concat(newDataSet)
            })
        }).catch(err => {
            console.log(err);
            return false;
        })
    }

    // Simply changes the state of the selected variable to the value of the DropDown menu.
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log('Selected ' + e.target.id + ': ' + this.state.gender);
    }

    // Pops the last element of the array. 
    removeDataSet(e) {
        var index = this.state.dataSets.length - 1;
        this.setState({
            dataSets: this.state.dataSets.filter((_, i) => i != index)
        });
        console.log("removeDataSet called: ");
    }
    // Prints the data set that gets passed to Spider Chart. 
    test(e) {
        console.log(this.state.dataSets);
    }

    DownloadCSV(e) {
      const FileDownload = require('js-file-download');

      axios.get(`http://localhost:8080/api/students/`)
         .then((response) => {
              const { Parser } = require('json2csv'); // converts json to csv and downloads it, flattens the survey data first
 
              const fields = ['survey.gender', 'survey.raceEthnicity', 'survey.major', 'survey.E2',
              'survey.E3','survey.E4','survey.E5','survey.E6','survey.E7','survey.E8','survey.E9'];
              
               
              const json2csvParser = new Parser({ fields });
              const csv = json2csvParser.parse(response.data);
               
              FileDownload(csv, 'report.csv');
              
         });


    }
    // Prints the data set that gets passed to Spider Chart. 
    test(e) {
        console.log(this.state.dataSets);
    }

    componentDidMount(){
        const id = this.props.getId;
        var newDataSet = [];
        console.log(id)
        axios.get(
            'http://localhost:8080/api/students/' + id,
        )
        .then(res => {
            console.log(res);
            newDataSet = [{
                data: {
                    gender: res.data.gender,
                    raceEthnicity: res.data.raceEthnicity,
                    major: res.data.major,
                    E2: res.data.E2/4,
                    E3: res.data.E3/4,
                    E4: res.data.E4/4,
                    E5: res.data.E5/4,
                    E6: res.data.E6/4,
                    E7: res.data.E7/4,
                    E8: res.data.E8/4,
                    E9: res.data.E9/4,
                },
                meta: {color: "green"}
            }]
            this.setState({
                dataSets: this.state.dataSets.concat(newDataSet)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        const genders = ['Woman', 'Man', 'Trans', 'Other', 'I don\'t want to respond'];
        const race = ['Asian', 'Black', 'Hispanic', 'Pacific', 'White', 'Other', 'Mix'];
        const major = ['General Engineering', 'Civil Engineering', 'Construction', 'Agricultural Engineering', 'Applied Engineering', 
        'Biomedical Engineering', 'Chemical Engineering', 'Electrical Engineering', 'Engineering Management', 'Engineering Physics', 
        'Engineering Science', 'Industrial Engineering', 'Materials Engineering', 'Mechanical Engineering', 'Nanoengineering', 
        'Nuclear Engineering', 'Other']

        return (
            <div class="box">
                <fieldset>
                    <legend>E2020 Attributes by Groups</legend>
                    <Grid columns={3}>
                        <Grid.Column>
                        <Segment>
                        <Form onSubmit={this.handleSubmit} class="form-gender-col">
                                <label>Gender:</label>
                                <select value={this.state.value} id="gender" onChange={this.handleChange.bind(this)} value={this.state.gender}>
                                    <option value="-1">None</option>
                                    <option value="1">Woman</option>
                                    <option value="2">Man</option>
                                    <option value="3">Trans</option>
                                    <option value="4">Other</option>
                                    <option value="5">I don't want to respond</option>
                                </select>
                            </Form>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                            <Form onSubmit={this.handleSubmit} class="form-race-col">
                                <label>Race/Ethnicty:</label>
                                <select value={this.state.raceEthnicity} id="raceEthnicity" onChange={this.handleChange.bind(this)} value={this.state.raceEthnicity}>
                                    <option value="-1">None</option>
                                    <option value="1">Asian</option>
                                    <option value="2">Black or African American</option>
                                    <option value="3">Hispanic, Latino, or Spanish Origin</option>
                                    <option value="4">Native Hawaiian or Other Pacific Islander</option>
                                    <option value="5">White</option>
                                    <option value="6">Other</option>
                                    <option value="7">Mix</option>
                                </select>
                            </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                            <form onSubmit={this.handleSubmit} class="form-major-col">
                                <label>Major:</label>
                                <select value={this.state.major} id="major" onChange={this.handleChange.bind(this)} value={this.state.major}>
                                    <option value="-1">None</option>
                                    <option value="1">General Engineering</option>
                                    <option value="2">Civil Engineering</option>
                                    <option value="3">Construction</option>
                                    <option value="4">Agricultural Engineering</option>
                                    <option value="5">Applied Engineering</option>
                                    <option value="6">Biomedical Engineering</option>
                                    <option value="7">Chemical Engineering</option>
                                    <option value="8">Electrical Engineering</option>
                                    <option value="9">Engineering Management</option>
                                    <option value="10">Engineering Physics</option>
                                    <option value="11">Engineering Science</option>
                                    <option value="12">Industrial Engineering</option>
                                    <option value="13">Materials Engineering</option>
                                    <option value="14">Mechanical Engineering</option>
                                    <option value="15">Nanoengineering</option>
                                    <option value="16">Nuclear Engineering</option>
                                    <option value="17">Other</option>
                                </select>
                            </form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Label size="big" floated="left">
                        <Icon name='users'/>{this.state.numObservations}
                    </Label>
                    <Button.Group floated="right">
                          
                            <Button color="grey" attached="right" size="small" onClick={this.DownloadCSV.bind(this)}>Download CSV</Button>
                    </Button.Group>
                </fieldset>
                <SpiderChart 
                    dataSets={this.state.dataSets}
                />
            </div>
        )
    }
}

export default StatisticsPage



