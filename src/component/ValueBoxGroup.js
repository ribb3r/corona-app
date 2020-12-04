import React from "react";
import { Divider } from 'semantic-ui-react'
import ValueBox from "./ValueBox";
import api from '../api/covid-19'

export default class ValueBoxGroup extends React.Component {
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
    const cities = ["düsseldorf", "essen", "krefeld", "solingen"];
    cities.forEach ((city) => {
      const params = new URLSearchParams([['q', city]]);
      api.getCasesForOneWeek(params).then(response => response.data.records[0].fields)
      .then((data) => {
        let updatedCity = {};
        updatedCity.cases7Per100k = data.cases7_per_100k;
        updatedCity.lastUpdated = data.last_update;
        this.setState({ [`${city}`]: updatedCity })
       })
      .catch(error => {
        console.error(error)
      });
    });
  }

  handleClick = () => {
    this.queryApi();
    this.setState({refresh: true});
    console.log("refresh");
  };

  render() {
    return (
      <div>
        <ValueBox city="Essen" cases7Per100k={this.state.essen.cases7Per100k} lastUpdated={this.state.essen.lastUpdated}/>
        <Divider />
        <ValueBox city="Krefeld" cases7Per100k={this.state.krefeld.cases7Per100k} lastUpdated={this.state.krefeld.lastUpdated}/>
        <Divider />
        <ValueBox city="Solingen" cases7Per100k={this.state.solingen.cases7Per100k} lastUpdated={this.state.solingen.lastUpdated}/>
      </div>
    );
  }
}
