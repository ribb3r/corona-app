import React from "react";
import { Statistic } from 'semantic-ui-react'
import * as dayjs from 'dayjs'
import de from 'dayjs/locale/de'

export default class ValueBox extends React.Component {
    constructor(props) {
      super(props);
      dayjs.locale('de-german', de)
    }

    render() {
      return (
        <Statistic size='huge'>
          <Statistic.Label>{this.props.city}</Statistic.Label>
          <p>Daten vom: {this.props.lastUpdated === "" ? "unbekannt" : dayjs(this.props.lastUpdated).format('dd. DD.MM.YYYY')}</p>
          <Statistic.Value>{Math.round(this.props.cases7Per100k)}</Statistic.Value>
        </Statistic>
      );
    }
}
