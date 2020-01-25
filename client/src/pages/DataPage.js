import React, {Component} from 'react';
import {Button, Header, Form, Grid, Divider, Segment, Label, Icon, Dropdown, Menu} from 'semantic-ui-react'
import SpiderChart from '../components/SpiderChart'
import '../styles/DataPage.css'
import axios from 'axios';
import {ResponsiveBar} from "@nivo/bar";
import data from '../data/data.js';

class DataPage extends Component {
    state = {
        gender: "", // 1: Woman, 2: Man, 3: Trans, 4: Other, 5: I don't want to respond
        race: "", // 1: Asian, 2: Black, 3: Hispanic, 4: Pacific, 5: White, 6: Other, 7: Mix
        major: "", // 1: General Engineering, 2: Civil Engineering, 3: Construction
        dataSets: [], // This should hold all of the data sets to be passed down and depicted in SpiderChart.js
        graphColor: 0, // index variable to cycle through colors.
        numObservations: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            gender: '-1',
            raceEthnicity: '-1',
            major: '-1',
            dataSets: [],
            graphColor: 1,
            color: 0,
            numObservations: 0,
            array: [],
            x: [],
            act: [],
            option: [],
            disp: [],
            activities: [],
            outComes: [],
            outOption: 1,
            show: false,
            xAxis: "",
            title: "",
            optDisp: "",
            isDone: true,
            textB: "",
            vis: 1,
            hasClicked: false,
            hasClicked2: false,
            modalIsOpen: false,
            visCrt: 1,
            bgGender: 0,
            bgRace: 0,
            bgMajor: 0,
            set: false,
            currDataSets: [],
            con: [],
            popUp: false,
            toView: [],
            textBased: ""
        };
        this.onHomePress = this.onHomePress.bind(this);
    }
    onHomePress = () => {
        this.props.history.push('/homepage/' + this.props.getId);
    };
    avgIngenuity = () => {
        /*Runs and shows the Average ingenuity by skill; sorted first by value (average),
        then ascending alphabetically (if there are duplicate averages.*/
        this.setState({vis: 1});
        this.setState({outOption: 1});
        let ingenuity = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            ingenuity.push({activity: this.state.x[i][0], value: this.state.x[i][1][0]});
        }
        ingenuity.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: ingenuity});
        this.setState({xAxis: "Average Ingenuity Score"});
        this.setState({title: "Recommended Activities to Improve Ingenuity"});
        this.setState({textB: "Ingenuity"});
        this.setState({hasClicked: false});
        return ingenuity;
    };
    avgCreativity = () => {
        this.setState({outOption: 2});
        let creativity = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            creativity.push({activity: this.state.x[i][0], value: this.state.x[i][1][1]});
        }
        creativity.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: creativity});
        this.setState({xAxis: "Average Creativity Score"});
        this.setState({title: "Recommended Activities to Improve Creativity"});
        this.setState({textB: "Creativity"});
        this.setState({vis: 2});
        return creativity;
    };
    avgCommunication = () => {
        this.setState({outOption: 3});
        let communication = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            communication.push({activity: this.state.x[i][0], value: this.state.x[i][1][2]});
        }
        communication.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: communication});
        this.setState({xAxis: "Average Communication Score"});
        this.setState({title: "Recommended Activities to Improve Communication"});
        this.setState({textB: "Communication"});
        this.setState({vis: 3});
        return communication;
    };
    avgBusiness = () => {
        this.setState({outOption: 4});
        let business = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            business.push({activity: this.state.x[i][0], value: this.state.x[i][1][3]});
        }
        business.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: business});
        this.setState({xAxis: "Average Business & Management Score"});
        this.setState({title: "Recommended Activities to Improve Business & Managment"});
        this.setState({textB: "Average Business & Management Score"});
        this.setState({vis: 4});
        return business;

    };
    avgLeadership = () => {
        this.setState({outOption: 5});
        let leadership = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            leadership.push({activity: this.state.x[i][0], value: this.state.x[i][1][4]});
        }
        leadership.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: leadership});
        this.setState({xAxis: "Average Leadership Score"});
        this.setState({title: "Recommended Activities to Improve Leadership"});
        this.setState({vis: 5});
        return leadership;
    };
    avgEthical = () => {
        this.setState({outOption: 6});
        let ethical = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            ethical.push({activity: this.state.x[i][0], value: this.state.x[i][1][5]});
        }
        ethical.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: ethical});
        this.setState({xAxis: "Average High Ethical Standards Score"});
        this.setState({title: "Recommended Activities to Improve Ethical Standards"});
        this.setState({vis: 6});
        return ethical;
    };
    avgProfessionalism = () => {
        this.setState({outOption: 7});
        let professionalism = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            professionalism.push({activity: this.state.x[i][0], value: this.state.x[i][1][6]});
        }
        professionalism.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: professionalism});
        this.setState({xAxis: "Average Professionalism Score"});
        this.setState({title: "Recommended Activities to Improve Professionalism"});
        this.setState({vis: 7});
        return professionalism;
    };
    avgDynamism = () => {
        this.setState({outOption: 8});
        let dynamism = [];
        for (let i = 0, j = this.state.x.length; i < j; i++) {
            dynamism.push({activity: this.state.x[i][0], value: this.state.x[i][1][7]});
        }
        dynamism.sort(
            function (a, b) {
                if (a.value === b.value) {
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        this.setState({disp: dynamism});
        this.setState({xAxis: "Average Dynamism, Agility, Resilience, and Flexibility"});
        this.setState({title: "Recommended Activities to Improve Dynamism, Agility, Resilience, and Flexibility Score"});
        this.setState({vis: 8});
        return dynamism;
    };

    // Creates a new dataSet array to push onto the dataSets array 
    // that gets passed onto SpiderChart.js. T
    addDataSet() {
        let colors = ["black", "aqua", "red", "yellow", "blue", "pink", "grey", "brown", "orange", "purple"];
        let filteredData = [];
        axios.get(
            '/api/students/'
        ).then(res => {
            filteredData = res.data;
            if (this.state.gender != -1) { //swap to !=
                filteredData = filteredData.filter(entry => {
                    this.setState({bgGender: Number(this.state.gender)});
                    return (entry.survey.gender === this.state.gender);
                })
            } else if (this.state.gender == -1) {
                this.setState({bgGender: 0});
                /* this.setState({bgGender: 0});*/
            }
            if (this.state.raceEthnicity != -1) { //swap to !=
                filteredData = filteredData.filter(entry => {
                    this.setState({bgRace: Number(this.state.raceEthnicity)});
                    return (entry.survey.raceEthnicity === this.state.raceEthnicity);
                })
            } else if (this.state.raceEthnicity == -1) {
                this.setState({bgRace: 0});
            }
            if (this.state.major != -1) { //swap to !=
                filteredData = filteredData.filter(entry => {
                    this.setState({bgMajor: Number(this.state.major)});
                    return (entry.survey.major === this.state.major);
                })
            } else if (this.state.major === -1) {
                this.setState({bgMajor: 0});
            }
            var size = filteredData.length;
            this.setState({
                numObservations: size
            });
            if (size === 0) {
                /*If no students in the database match the search criteria,
                 it opens a warning pop-up. Rests the input fields to "0" values to accept new input.
                 */
                this.setState({popUp: true});
                this.setState({bgRace: 0});
                this.setState({raceEthnicity: "-1"});
                this.setState({bgGender: 0});
                this.setState({gender: "-1"});
                this.setState({bgMajor: 0});
                this.setState({major: "-1"});
                return false;
            } else if (size > 0) {
                this.setState({
                    numObservations: size
                });
                this.onComplete([this.state.bgGender, this.state.bgRace, this.state.bgMajor]);
                let sumE2 = 0, sumE3 = 0, sumE4 = 0, sumE5 = 0, sumE6 = 0, sumE7 = 0, sumE8 = 0, sumE9 = 0;
                let newDataSet = [];
                for (let entry = 0, len = size; entry < len; entry++) {
                    sumE2 += filteredData[entry].survey.E2;
                    sumE3 += filteredData[entry].survey.E3;
                    sumE4 += filteredData[entry].survey.E4;
                    sumE5 += filteredData[entry].survey.E5;
                    sumE6 += filteredData[entry].survey.E6;
                    sumE7 += filteredData[entry].survey.E7;
                    sumE8 += filteredData[entry].survey.E8;
                    sumE9 += filteredData[entry].survey.E9;
                }
                newDataSet = [{
                    data: {
                        gender: this.state.gender,
                        raceEthnicity: this.state.raceEthnicity,
                        major: this.state.major,
                        E2: (sumE2 / size) / 4,
                        E3: (sumE3 / size) / 4,
                        E4: (sumE4 / size) / 4,
                        E5: (sumE5 / size) / 4,
                        E6: (sumE6 / size) / 4,
                        E7: (sumE7 / size) / 4,
                        E8: (sumE8 / size) / 4,
                        E9: (sumE9 / size) / 4,
                    },
                    meta: {color: colors[this.state.graphColor]}
                }];
                this.setState({
                    dataSets: this.state.dataSets.concat(newDataSet),
                    graphColor: this.state.graphColor + 1
                });
                if (this.state.graphColor > 9) {
                    this.setState({
                        graphColor: 0
                    });
                }
            }
        }).catch(err => {
            return false;
        });
    }

    // Simply changes the state of the selected variable to the value of the DropDown menu.
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
        this.setState({popUp: false}); // closes the pop-up
    }

    // Pops the last element of the array. 
    removeDataSet = () => {
        /* update: length !==1..... you shouldn't be able to remove the student's spider chart.
        A student would have to refresh the page to see their Spider Chart.*/
        if (this.state.dataSets.length > 1) {
            /*Will eventually change so upon removal of an option, it loads the most recently added
            data in the Bar Graph, rather than the default "all users" criteria.*/
            let _thisRef = this;
            //if there are other filter criteria beyond "all users/default"
            let index = this.state.dataSets.length - 1;
            this.setState({
                dataSets: this.state.dataSets.filter((_, i) => i !== index)
            });
            this.setState({
                con: this.state.con.filter((_, i) => i !== this.state.con.length - 1)
            }, function () {
                _thisRef.setState({disp: [..._thisRef.state.disp]});
                _thisRef.onComplete.call(this, [0, 0, 0]);
            });
            this.setState({gender: '-1'});
            this.setState({raceEthnicity: '-1'});
            this.setState({major: '-1'});
            this.setState({disp: [...this.state.disp],function() {this.avgIngenuity('');}
            });
        }
    };
    componentDidMount() {
        const id = this.props.getId;
        let newDataSet = [];
        axios.get(
            '/api/students/' + id,
        )
            .then(res => {
                newDataSet = [{
                    data: {
                        gender: res.data.survey.gender,
                        raceEthnicity: res.data.survey.raceEthnicity,
                        major: res.data.survey.major,
                        E2: res.data.survey.E2 / 4,
                        E3: res.data.survey.E3 / 4,
                        E4: res.data.survey.E4 / 4,
                        E5: res.data.survey.E5 / 4,
                        E6: res.data.survey.E6 / 4,
                        E7: res.data.survey.E7 / 4,
                        E8: res.data.survey.E8 / 4,
                        E9: res.data.survey.E9 / 4,
                    },
                    meta: {color: "green"}
                }];
                this.setState({dataSets: this.state.dataSets.concat(newDataSet)});
            })
            .catch(err => {
                this.setState({set: true});
                console.log(err);
            });
        this.handleCurrDataSets(''); //Runs to add "All Users as an option in the bar graph dropdown"
        this.setState({numObservations: newDataSet.length});
        this.onComplete([0, 0, 0]); //runs the default all users option for the bar graph
    }

    onComplete = ([genderBg, raceBg, majorBg]) => {
        if (this.state.gender === -1 && genderBg != 0) {
            this.setState({bgGender: 0});
        }
        if (this.state.raceEthnicity === -1 && raceBg != 0) {
            this.setState({bgRace: 0});
        }
        if (this.state.major === -1 && majorBg != 0) {
            this.setState({bgMajor: 0});
        }
        this.setState({bgGender: genderBg});
        this.setState({bgRace: raceBg});
        this.setState({bgMajor: majorBg});
        let options = [genderBg, raceBg, majorBg];
        options.forEach(function (item, i) {
            options[i] = String(options[i]); //converts to a string object
        });
        axios.post(
            'http://localhost:8080/api/students/data', {arr: options}
        )
            .then(res => {
                let d = [];
                let act = [];
                this.setState({numObservations: res.data[res.data.length - 1]});
                for (let i = 0, n = res.data.length - 1; i < n; i++) {
                    d.push([res.data[i][0], res.data[i][1][0]]);
                    this.state.x.push([res.data[i][0], res.data[i][1][0]]);
                    act.push(res.data[i][0]);
                }
                this.setState({x: d}); //sets the average value
                this.setState({act: act}); //sets the activity name
                this.setState({toView: this.state.currDataSets.concat([d])});
                this.handleCurrDataSets.call(''); //adds the option to the data set dropdown
                return this.avgIngenuity(this.state.bgGender, this.state.bgRace, this.state.bgMajor);
            })
            .catch(err => {
                console.log(err);
            })
    };
    handleCurrDataSets = () => {
        const gen = ["", "Man", "Woman", "Trans", "Other", "I Don't Want to Respond"];
        const eth = ["", "American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic, Latino, or Spanish Origin", "Native Hawaiian or Other Pacific Islander", "White"];
        const maj = ["", "General Engineering", "Civil Engineering", "Construction", "Agricultural Engineering", "Applied Engineering", "Biomedical Engineering", "Chemical Engineering", "Electrical Engineering", "Engineering Management", "Engineering Physics", "Engineering Science", "Industrial Engineering", "Materials Engineering", "Mechanical Engineering", "Nanoengineering", "Nuclear Engineering", "Other"];
        let genStr = gen[this.state.bgGender];
        let raceStr = eth[this.state.bgRace];
        let majStr = maj[this.state.bgMajor];
        let concept = "";
        if (this.state.bgMajor == 0) {
            if (this.state.bgRace != 0) {
                if (this.state.bgGender == 0) {
                    //RACE specified
                    concept += (raceStr);
                } else {
                    //GENDER and RACE specified
                    concept += (genStr + " and " + raceStr);
                }
            } else if (this.state.bgRace == 0) {
                if (this.state.bgGender == 0) {
                    //Gender, race, amd major are ALL unspecified
                    concept += ("All Users");
                } else {
                    //GENDER specified
                    concept += (genStr);
                }
            }
        } else if (this.state.bgMajor != 0) {
            if (this.state.bgRace != 0) {
                if (this.state.bgGender == 0) {
                    //RACE and MAJOR specified
                    concept += (raceStr + " and " + majStr);
                } else {

                    //GENDER, RACE, AND MAJOR specified
                    concept += (genStr + ", " + raceStr + ", and " + majStr);
                }
            } else if (this.state.bgRace == 0) {
                if (this.state.bgGender == 0) {
                    //MAJOR specified
                    concept += (majStr);
                } else {
                    //GENDER and MAJOR specified
                    concept += (genStr + " and " + majStr);
                }
            }
        }
        this.setState({textBased: concept});
        let hasConcep = this.state.con.some(con => con['text'] === concept);
        if (hasConcep === false) {
            //Runs if the combination of search criteria are NOT currently in the bargraph dropdown
            //Adds the new search criteria to the dropdown, to switch between currently added datasets
            this.setState({
                con: [...this.state.con, {
                    key: this.state.con.length + 9,
                    text: concept, value: this.state.con.length + 9,
                    onClick: (this.onComplete.bind(this, [this.state.bgGender, this.state.bgRace, this.state.bgMajor, this.state.bgGender], concept)),
                    selected: this.state.visCrt === 1 + 9
                }],
            });
        }
    };

    render() {
        const options = [
            {key: 1, text: 'Ingenuity', value: 1, onClick: (this.avgIngenuity), selected: this.state.vis === 1},
            {key: 2, text: 'Creativity', value: 2, onClick: this.avgCreativity, selected: this.state.vis === 2},
            {key: 3, text: 'Communication', value: 3, onClick: this.avgCommunication, selected: this.state.vis === 3},
            {key: 4, text: 'Business & Management ', value: 4, onClick: this.avgBusiness, selected: this.state.vis === 4},
            {key: 5, text: 'Leadership', value: 5, onClick: this.avgLeadership, selected: this.state.vis === 5},
            {key: 6, text: 'High Ethical Standards', value: 6, onClick: this.avgEthical, selected: this.state.vis === 6},
            {key: 7, text: 'Professionalism', value: 7, onClick: this.avgProfessionalism, selected: this.state.vis === 7},
            {key: 8, text: 'Dynamism, Agility, Resilience, and Flexibility', value: 8, onClick: this.avgDynamism, selected: this.state.vis === 8}
        ];

        const trigger = (
            <span><Icon size="large" bordered={false} name='hand point right'/>{'Select a Category to Display'}</span>
        );
        const triggerIcon = (
            <span><Icon color='grey' size="large" bordered={false} name='users'/>{'Select a Current Data Set'}</span>
        );


        return (
            <div className="box">
                <fieldset>
                    <legend>E2020 Attributes by Groups</legend>
                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment>
                                <Form onSubmit={this.handleSubmit} class="form-gender-col">
                                    <label>Gender:</label>
                                    <select value={this.state.gender} id="gender"
                                            onChange={this.handleChange.bind(this)}>
                                        <option value="-1">None</option>
                                        <option value="2">Woman</option>
                                        <option value="1">Man</option>
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
                                    <label>Race/Ethnicity:</label>
                                    <select value={this.state.raceEthnicity} id="raceEthnicity"
                                            onChange={this.handleChange.bind(this)}>
                                        <option value="-1">None</option>
                                        <option value="1">American Indian or Alaska Native</option>
                                        <option value="2">Asian</option>
                                        <option value="3">Black or African American</option>
                                        <option value="4">Hispanic, Latino, or Spanish Origin</option>
                                        <option value="5">Native Hawaiian or Other Pacific Islander</option>
                                        <option value="6">White</option>
                                        {/* <option value="6">Other</option>
                                        <option value="7">Mix</option>*/}
                                    </select>
                                </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <Form onSubmit={this.handleSubmit} class="form-major-col">
                                    <label>Major:</label>
                                    <select value={this.state.major} id="major" onChange={this.handleChange.bind(this)}>
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
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={3}>
                        <Grid.Column floated="left">
                            <Label style={{margin: '10px'}} size="big" floated="left">
                                <Icon name='users'/>{this.state.numObservations}
                            </Label>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            {this.state.popUp === true &&
                            <Button size='medium' color='yellow' onClick={this.closeModal} toggle={!this.popUp}>
                                <Icon name='remove' color="black"/><b className="text">Warning: no Students Match the
                                Criteria!</b>
                            </Button>
                            }
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Button.Group floated="right">
                                <Button style={{margin: '10px'}} color='grey' attached="right" size="small"
                                        onClick={this.addDataSet.bind(this)}>
                                    Add Dataset
                                </Button>
                                <Button style={{margin: '10px'}} color="grey" attached="right" size="small"
                                        onClick={this.removeDataSet.bind('')}>
                                    Remove Dataset
                                </Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid>
                </fieldset>
                <SpiderChart
                    dataSets={this.state.dataSets}
                />
                <div className="bar">
                    <Menu inverted color='grey' className="menu">
                        <Menu.Menu className='menu' fluid>
                            <Button.Group color='grey' floated='right' className='groups'>
                                <Dropdown
                                    button
                                    simple
                                    fluid
                                    open={this.state.hasClicked2}
                                    closeOnChange={true}
                                    options={options}
                                    trigger={trigger}
                                />
                            </Button.Group>
                            <Button.Group color='grey' floated='right' className='groups'>
                                <Dropdown
                                    button
                                    simple
                                    fluid
                                    open={this.state.hasClicked}
                                    closeOnChange={true}
                                    options={this.state.con}
                                    trigger={triggerIcon}
                                />
                            </Button.Group>
                        </Menu.Menu>
                    </Menu>
                </div>
                <Divider/>
                <div>
                    {this.state.outOption !== 0 &&
                    <Header as='h3' textAlign="center">
                        <Header.Content>{this.state.title}
                            <Header.Subheader>Based on: {this.state.textBased}</Header.Subheader>
                        </Header.Content>
                    </Header>
                    }
                    {this.state.outOption !== 0 &&
                    <div className='graph'>
                        <ResponsiveBar
                            data={this.state.disp}
                            layout='horizontal'
                            keys={['value']}
                            indexBy="activity"//sorts by the activities average values
                            maxValue={4}
                            margin={{top: 0, right: 400, bottom: 50, left: 400}}
                            padding={0.25}
                            colors={{scheme: 'spectral'}} //nivo is default, use spectral after custom ordinal
                            colorBy="value"
                            borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                            borderWidth={2}
                            borderRadius={1}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: this.state.xAxis,
                                legendPosition: 'middle',
                                legendOffset: 40
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Activity',
                                legendPosition: 'middle',
                                legendOffset: -300,
                            }}
                            labelSkipWidth={4}
                            labelSkipHeight={4}
                            enableLabel={true}
                            isInteractive={false}
                            animate={true}
                            motionStiffness={150}
                            motionDamping={35}
                            labelTextColor="white"
                            //Formats the text sizes of the bar graph
                            theme={{
                                axis: {
                                    ticks: {text: {fontSize: '16px'}},
                                    legend: {text: {fontSize: '18px', color: "#ffffff", fontWeight: 600}},
                                },
                                labels: {
                                    text: {
                                        fontSize: '20px',
                                        fontWeight: 900,
                                        stroke: "#000000",
                                        strokeWidth: 1.5
                                    }
                                },
                                grid: {line: {fontSize: '16px', stroke: "#555555"}}
                            }}/>
                    </div>
                    }
                    <div className='homeSection'>
                        <Divider/>
                        <Grid>
                            <Grid.Row stretched>
                                <Grid.Column centered stretched>
                                    <Grid textAlign='center'>
                                        <Button size='tiny' basic color="black" onClick={this.onHomePress}>
                                            <Icon name='home'/>
                                            Home
                                        </Button>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataPage