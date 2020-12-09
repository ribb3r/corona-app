import React from "react";
import { Statistic, Placeholder, Segment } from 'semantic-ui-react'
import * as dayjs from 'dayjs'
import de from 'dayjs/locale/de'

export default class ValueBox extends React.Component {
    constructor(props) {
      super(props);
      dayjs.locale('de-german', de)
    }

    render() {
      let mainContent;
      if (this.props.promiseInProgress) {
        mainContent = <Statistic size='huge'>
            <Placeholder style={{ width: 220 }}>
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            </Placeholder>
          </Statistic>
      } else {
        let color = 'green';
        if (this.props.cases7Per100k >= 200) {
          color = 'red';
        } else if (this.props.cases7Per100k >= 100) {
          color = 'orange';
        } else if (this.props.cases7Per100k >= 50 && this.props.cases7Per100k < 100) {
          color = 'yellow';
        }

        mainContent = <Statistic size='huge' color={color}>
          <Statistic.Label>{this.props.city}</Statistic.Label>
          <p>Daten vom: {this.props.lastUpdated === "" ? "unbekannt" : dayjs(this.props.lastUpdated).format('dd. DD.MM.YYYY')}</p>
          <Statistic.Value>{Math.round(this.props.cases7Per100k)}</Statistic.Value>
        </Statistic>
      }

      return (<Segment raised style={{ minWidth: 250, maxWidth: 630, height: 166 }}>{mainContent}</Segment>);
    }
}
