import React, { Component } from 'react';
import { SegmentedControl } from 'segmented-control';

import './BondCard.css';
import Chart from '../Chart';
import SelectList from '../ui/SelectList';
import {
  DATE_CONTROL_OPTIONS,
  BOND_CHART_PARAMS,
  CHART_DATA_MAPPING,
  CHART_GROUPING_MAPPING
} from '../../constants';

const defaultChartParam = BOND_CHART_PARAMS[0];
const defaultDatePeriod = DATE_CONTROL_OPTIONS.find(option => option.default)
  .value;

class BondCard extends Component {
  state = {
    datePeriod: defaultDatePeriod,
    chartParam: defaultChartParam
  };

  handleDatePeriodChange = datePeriod => this.setState({ datePeriod });

  handleChartParamChange = ({ value }) => this.setState({ chartParam: value });

  render() {
    const { bond } = this.props;
    const { name, price, currency, id, text } = bond;
    const { datePeriod, chartParam } = this.state;

    const units = CHART_GROUPING_MAPPING[datePeriod];
    const chartData = bond[CHART_DATA_MAPPING[chartParam]];

    return (
      <div className="BondCard">
        <div className="BondCard-head">
          <h1>
            {name} {price}
          </h1>
          <p>{currency}</p>
        </div>
        <p>{id}</p>
        <p>{text}</p>
        <hr />
        <SegmentedControl
          name="dateControl"
          options={DATE_CONTROL_OPTIONS}
          setValue={this.handleDatePeriodChange}
          style={{ transitionDuration: '0s' }}
        />
        <div className="BondCard-chartWrapper">
          <Chart data={chartData} units={units} />
          <div className="BondCard-chartWrapper-selectList">
            <SelectList
              options={BOND_CHART_PARAMS}
              onChange={this.handleChartParamChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default BondCard;
