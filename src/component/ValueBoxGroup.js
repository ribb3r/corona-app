import React from "react";
import { trackPromise, promiseTrackerHoc } from 'react-promise-tracker';
import { Container, Button, Icon, Grid, Header } from 'semantic-ui-react'
import ValueBox from "./ValueBox";
import api from '../api/covid-19'

class ValueBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      essen: {
        lastUpdated: "",
        cases7Per100k: 0
      },
      krefeld: {
        lastUpdated: "",
        cases7Per100k: 0
      },
      neuss: {
        lastUpdated: "",
        cases7Per100k: 0
      },
      solingen: {
        lastUpdated: "",
        cases7Per100k: 0
      }
    };
  }

  componentDidMount() {
    this.queryApi();
    setInterval(() => this.queryApi(), 1000 * 60 * 60 * 6)
  }

  queryApi() {
    Object.keys(this.state).forEach ((city) => {
      const params = new URLSearchParams([['q', city]]);
      trackPromise(
        api.getCasesForOneWeek(params).then(response => response.data.records[0].fields)
          .then((data) => {
            let updatedCity = {};
            updatedCity.cases7Per100k = data.cases7_per_100k;
            updatedCity.lastUpdated = data.last_update;
            this.setState({ [`${city}`]: updatedCity })
          })
          .catch(error => {
            console.error(error)
          })
      );
  })}

  handleClick = () => {
    this.queryApi();
  };

  render() {    
    return (
      <Container>
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
                  city="Essen"
                  cases7Per100k={this.state.essen.cases7Per100k}
                  lastUpdated={this.state.essen.lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Krefeld"
                  cases7Per100k={this.state.krefeld.cases7Per100k}
                  lastUpdated={this.state.krefeld.lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ValueBox
                  city="Kreis Neuss"
                  cases7Per100k={this.state.neuss.cases7Per100k}
                  lastUpdated={this.state.neuss.lastUpdated}
                  promiseInProgress={this.props.promiseInProgress}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <ValueBox
                city="Solingen"
                cases7Per100k={this.state.solingen.cases7Per100k}
                lastUpdated={this.state.solingen.lastUpdated}
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
