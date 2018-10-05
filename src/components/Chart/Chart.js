import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ data, units }) => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={{
      series: [{ data }],
      xAxis: {
        ordinal: false
      },
      rangeSelector: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataGrouping: {
            forced: true,
            approximation: 'average',
            units
          }
        }
      }
    }}
  />
);

export default Chart;
