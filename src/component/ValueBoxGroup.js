import React from "react";
import { trackPromise, promiseTrackerHoc } from 'react-promise-tracker';
import { Container, Button, Icon, Grid, Header, Message } from 'semantic-ui-react'
import ValueBox from "./ValueBox";
import api from '../api/covid-19'

class ValueBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "hospitalizationCurrent": 0,
      "hospitalization7DaysAgo": 0,
      "05111": {
        lastUpdated: "",
        cases7Per100k: 0
      },
      "05113": {
        lastUpdated: "",  
        cases7Per100k: 0
      },
      "05114": {
        lastUpdated: "",
        cases7Per100k: 0
      },
      "05162": {
        lastUpdated: "",
        cases7Per100k: 0
      },
      "05122": {
        lastUpdated: "",
        cases7Per100k: 0
      }
    };
  }

  componentDidMount() {
    this.queryApi();
    setInterval(() => this.queryApi(), 1000 * 60 * 60 * 6)
  }

  hospitalizationChange = () => (this.state.hospitalizationCurrent - this.state.hospitalization7DaysAgo).toFixed(2);

  queryApi() {
    Object.keys(this.state).forEach ((city) => {
      trackPromise(
        api.getCasesForOneWeek(city).then(response => response.data)
          .then((data) => {
            let updatedCity = {};
            updatedCity.cases7Per100k = data.data[city].weekIncidence;
            updatedCity.lastUpdated = data.meta.lastUpdate;
            this.setState({ [`${city}`]: updatedCity })
          })
          .catch(error => {
            console.error(error)
          })
      );
  });
  api.getHospitalization(7).then(response => response.data)
    .then((data) => {
      this.setState({ hospitalizationCurrent: data.data["NW"].history[[data.data["NW"].history.length-1]].incidence7Days });
      this.setState({ hospitalization7DaysAgo: data.data["NW"].history[[data.data["NW"].history.length-8]].incidence7Days });
    })
    .catch(error => {
      console.error(error)
    })
}

  handleClick = () => {
    this.queryApi();
  };

  render() {
    let color = 'green';
    if (this.hospitalizationChange > 0) {
      color = 'red';
    }

    return (
      <Container>
        <Message info>
          <Message.Header>Hospitalisierungsrate NRW: {this.state.hospitalizationCurrent} (<font color={color}>{this.hospitalizationChange()}</font>)</Message.Header>
        </Message>
        <Header as='h1'>COVID-19-Erkrankung</Header>
        <Header as='h5' dividing>pro 100.000 Einwohner in den letzten 7 Tagen</Header>
        <Button icon className="ui right floated button" title="aktualisieren" onClick={this.handleClick}>
          <Icon name="refresh" />
        </Button>
        <div className='ui centered grid'>
          <Grid>
          <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Düsseldorf"
                  cases7Per100k={this.state["05111"].cases7Per100k}
                  lastUpdated={this.state["05111"].lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Essen"
                  cases7Per100k={this.state["05113"].cases7Per100k}
                  lastUpdated={this.state["05113"].lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Krefeld"
                  cases7Per100k={this.state["05114"].cases7Per100k}
                  lastUpdated={this.state["05114"].lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Kreis Neuss"
                  cases7Per100k={this.state["05162"].cases7Per100k}
                  lastUpdated={this.state["05162"].lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <ValueBox
                city="Solingen"
                cases7Per100k={this.state["05122"].cases7Per100k}
                lastUpdated={this.state["05122"].lastUpdated}
                promiseInProgress={this.props.promiseInProgress}
              />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        </Container>
      )
    };
}

export default promiseTrackerHoc(ValueBoxGroup);
