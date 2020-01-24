import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container
} from "semantic-ui-react";
import { Route, withRouter, Redirect } from "react-router-dom";

class adminPanel extends Component {
  constructor(props) {
    super(props);
  }

  onSurveyPress = () => {
    this.props.history.push("/survey");
  };

  onStatisticsPress = () => {
    this.props.history.push("/statistics");
  };

  render() {
    return (
      <div
        class="huge buttons"
        style={{
          height: "85vh",
        }}
      >
        <Grid>
          <Grid.Column textAlign="center">
            <Button primary size="massive" onClick={this.onSurveyPress}>
              {" "}
              Access Surveys{" "}
            </Button>{" "}
            <Button secondary size="massive" onClick={this.onStatisticsPress}>
              {" "}
              Access Statistics{" "}
            </Button>{" "}
          </Grid.Column>
        </Grid>{" "}
      </div>
    );
  }
}

export default withRouter(adminPanel);
