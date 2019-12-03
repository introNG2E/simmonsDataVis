import React, {Component} from 'react';
import {
    Button,
    Header,
    Form,
    Grid,
    Divider,
    Segment,
    Label,
    Icon,
    Modal,
    Dropdown
} from 'semantic-ui-react'
import SpiderChart from '../components/SpiderChart'
import '../styles/DataPage.css'
import axios from 'axios';
import {ResponsiveBar} from "@nivo/bar";

class DataPage extends Component {

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
            modalIsOpen: false
        };
        this.onHomePress = this.onHomePress.bind(this);
    }

    onHomePress = () => {
        this.props.history.push('/homepage/' + this.props.getId);
    }


    avgIngenuity = () => {
        this.setState({vis: 1})
        this.setState({outOption: 1});
        var ingenuity = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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
        /*this.setState({optDisp: "Ingenuity"});*/
        this.setState({textB: "Ingenuity"});
        this.setState({hasClicked: false});
        return ingenuity;

    };
    avgCreativity = () => {
        this.setState({outOption: 2});
        var creativity = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
            creativity.push({activity: this.state.x[i][0], value: this.state.x[i][1][1]});
        }
        //creativity.sort((a, b) => (a.value > b.value) ? 1 : -1);
        creativity.sort(
            function (a, b) {
                if (a.value === b.value) {
                    //return a.activity - b.activity;
                    return a.activity < b.activity ? 1 : -1;
                }
                return a.value > b.value ? 1 : -1;
            });
        //setDisp(creativity);
        this.setState({disp: creativity});
        this.setState({xAxis: "Average Creativity Score"});
        this.setState({title: "Recommended Activities to Improve Creativity"});
        this.setState({textB: "Creativity"});
        this.setState({vis: 2});
        return creativity;
    };

    avgCommunication = () => {
        this.setState({outOption: 3});
        var communication = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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
        this.setState({vis: 3})
        return communication;

    };
    avgBusiness = () => {
        this.setState({outOption: 4});
        var business = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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

        this.setState({xAxis: "Average Business & Management Score"})
        this.setState({title: "Recommended Activities to Improve Business & Managment"});
        this.setState({textB: "Average Business & Management Score"});

        this.setState({vis: 4})
        return business;

    };
    avgLeadership = () => {
        this.setState({outOption: 5});
        var leadership = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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

        this.setState({xAxis: "Average Leadership Score"})

        this.setState({title: "Recommended Activities to Improve Leadership"});

        this.setState({vis: 5})
        return leadership;

    };
    avgEthical = () => {
        this.setState({outOption: 6});
        var ethical = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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

        this.setState({vis: 6})
        return ethical;

    };
    avgProfessionalism = () => {
        this.setState({outOption: 7});
        var professionalism = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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

        this.setState({xAxis: "Average Professionalism Score"})
        this.setState({title: "Recommended Activities to Improve Professionalism"});

        this.setState({vis: 7})
        return professionalism;

    };
    avgDynamism = () => {
        this.setState({outOption: 8});
        var dynamism = [];
        for (var i = 0, j = this.state.x.length; i < j; i++) {
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

        this.setState({vis: 8})
        return dynamism;
    };


    // Creates a new dataSet array to push onto the dataSets array 
    // that gets passed onto SpiderChart.js. T
    addDataSet(e) {
        //var filteredData = data;
        var filteredData = [];

        axios.get(
            '/api/students/'
        ).then(res => {
            filteredData = res.data;
            if (this.state.gender !== '-1') {
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.gender === this.state.gender);
                })
            }
            if (this.state.raceEthnicity !== '-1') {
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.raceEthnicity === this.state.raceEthnicity);
                })
            }
            if (this.state.major !== '-1') {
                filteredData = filteredData.filter(entry => {
                    return (entry.survey.major === this.state.major);
                })
            }
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
            for (var entry in filteredData) {
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
                meta: {color: "red"}
            }]
            if (size === 0) {
                return false;
            }
            this.setState({
                dataSets: this.state.dataSets.concat(newDataSet)
            })
        }).catch(err => {
            return false;
        })
    }

    // Simply changes the state of the selected variable to the value of the DropDown menu.
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // Pops the last element of the array. 
    removeDataSet(e) {
        var index = this.state.dataSets.length - 1;
        this.setState({
            dataSets: this.state.dataSets.filter((_, i) => i !== index)
        });
    }

    // Prints the data set that gets passed to Spider Chart.
    test(e) {
    }

    componentDidMount() {
        this.onComplete('');
        const id = this.props.getId;
        var newDataSet = [];
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
                }]
                this.setState({
                    dataSets: this.state.dataSets.concat(newDataSet)
                })
            })
            .catch(err => {
            })
    }

    onComplete(e) {
        //var options = [this.state.gender, this.state.race, this.state.major];
        //control for if gender,race,or major are not chosen here?
        /* axios.post('/url',post_data).then().catch().finally();*/

        /* const query = axios.post('http://localhost:8080/api/students/data/set',{arr: options}).then(res => {
              //
          })
              .catch(err => {
                  //
              }).finally( a => {
                  //
                  }
              )*/

        ///pass data to the backend, then parse, should be able to return data on a data request
        //if NOT, due the post, then pass array into get (students who match demo)
        axios.get(
            'http://localhost:8080/api/students/data'
        )
            .then(res => {
                var d = [];
                var act = [];
                var out = [];
                for (var i = 0, n = res.data.length; i < n; i++) {
                    //d.push([res.data[i][0],res.data[i][1][0]]); // the array storing the data passed from the backend
                    d.push([res.data[i][0], res.data[i][1][0]]);
                    this.state.x.push([res.data[i][0], res.data[i][1][0]]);
                    act.push(res.data[i][0]);
                    for (var j = 0, k = 7; j < k; j++) {

                        out.push(res.data[i][1][0])
                    }
                }
                this.setState({x: d});
                this.setState({act: act});
                //setAct(act);
                return this.state.x;

            })
            .catch(err => {
            }).finally(a => {
                    this.avgIngenuity(); //ensures ingenuity (default) is displayed on first render, since spider chart isn't clickable
                }
            )
        //return x;
    }


    render() {
        const options = [
            {key: 1, text: 'Ingenuity', value: 1, onClick: (this.avgIngenuity), selected: this.state.vis === 1},
            {key: 2, text: 'Creativity', value: 2, onClick: this.avgCreativity, selected: this.state.vis === 2},
            {key: 3, text: 'Communication', value: 3, onClick: this.avgCommunication, selected: this.state.vis === 3},
            {
                key: 4,
                text: 'Business & Management ',
                value: 4,
                onClick: this.avgBusiness,
                selected: this.state.vis === 4
            },
            {key: 5, text: 'Leadership', value: 5, onClick: this.avgLeadership, selected: this.state.vis === 5},
            {
                key: 6,
                text: 'High Ethical Standards',
                value: 6,
                onClick: this.avgEthical,
                selected: this.state.vis === 6
            },
            {
                key: 7,
                text: 'Professionalism',
                value: 7,
                onClick: this.avgProfessionalism,
                selected: this.state.vis === 7
            },
            {
                key: 8,
                text: 'Dynamism, Agility, Resilience, and Flexibility',
                value: 8,
                onClick: this.avgDynamism,
                selected: this.state.vis === 8
            }
        ];

        const home =
            <div className='homeSection'>
                <Divider/>
                {/*<Sticky offset = {0} className='foo' pushing = "false">*/}
                <Grid>
                    <Grid.Row stretched>
                        <Grid.Column centered stretched>
                            <Modal open={this.state.modalIsOpen} centered={true}
                                   trigger={<Grid textAlign='center'><Button size='tiny' basic color="black"
                                                                             onClick={this.openModal}>
                                       <Icon name='home'/> Home</Button>
                                   </Grid>}>
                                <Modal.Header>
                                    <Grid>
                                        <Grid.Row centered>
                                            Would you like to return to the homepage?
                                        </Grid.Row>
                                    </Grid>
                                </Modal.Header>
                                <Modal.Content>
                                    <Modal.Actions>
                                        <Grid columns={2}>
                                            <Grid.Row centered>
                                                <Grid.Column>
                                                    <Button size='large' color='green' onClick={this.onHomePress}>
                                                        <Icon name='checkmark' color='black'/> <b
                                                        className="text">Yes</b>
                                                    </Button>
                                                </Grid.Column>
                                                <Button size='large' color='red' onClick={this.closeModal}>
                                                    <Icon name='remove' color='black'/> <b className="text">No</b>
                                                </Button>
                                            </Grid.Row>
                                        </Grid>
                                    </Modal.Actions>
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {/*</Sticky>*/}
            </div>;

        const trigger = (
            <span>
     {'Select a Category to Display'}
  </span>
        );


        return (
            <div class="box">
                <fieldset>
                    <legend>E2020 Attributes by Groups</legend>
                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment>
                                <Form onSubmit={this.handleSubmit} class="form-gender-col">
                                    <label>Gender:</label>
                                    <select value={this.state.gender} id="gender" onChange={this.handleChange.bind(this)}>
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
                                    <select value={this.state.raceEthnicity} id="raceEthnicity" onChange={this.handleChange.bind(this)}>
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
                                </form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Label size="big" floated="left">
                        <Icon name='users'/>{this.state.numObservations}
                    </Label>
                    <Button.Group floated="right">
                        <Button color='grey' attached="right" size="small" onClick={this.addDataSet.bind(this)}>Add
                            Dataset</Button>
                        <Button color="grey" attached="right" size="small" onClick={this.removeDataSet.bind(this)}>Remove
                            Dataset</Button>
                        <Button color="grey" attached="right" size="small" onClick={this.test.bind(this)}>Print
                            DataSets</Button>
                    </Button.Group>
                </fieldset>
                <SpiderChart
                    dataSets={this.state.dataSets}
                />
                <Button.Group fluid color='grey' styles = {{margin: '4px'}}>
                    <Dropdown
                        button
                        simple
                        fluid
                        open={this.state.hasClicked}
                        closeOnChange={true}
                        options={options}
                        trigger={trigger}
                    />
                </Button.Group>
                <Header as='h3' dividing textAlign="center">
                    {this.state.title}
                </Header>
                {this.state.outOption !== 0 &&
                <Header as='h3' dividing>
                    Dividing Header
                </Header>
                &&
                <div style={{height: 450, width: 1080}}>
                    <ResponsiveBar
                        data={this.state.disp}
                        layout='horizontal'
                        keys={['value']}
                        indexBy="activity"
                        maxValue={4}
                        //minValue = "0"
                        margin={{top: 0, right: 250, bottom: 50, left: 250}}
                        padding={0.4}
                        colors={{scheme: 'spectral'}} //nivo is default
                        colorBy="value"
                        borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                        borderWidth={2}
                        borderRadius={1}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: this.state.xAxis,
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Activity',
                            legendPosition: 'middle',
                            legendOffset: -200
                        }}
                        labelSkipWidth={4}
                        labelSkipHeight={4}
                        enableLabel={true}
                        labelTextColor={{from: 'inherit', modifiers: [['darker', 2.0]]}}
                        isInteractive={false}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                </div>
                }
                {home}
            </div>
        )
    }
}

export default DataPage