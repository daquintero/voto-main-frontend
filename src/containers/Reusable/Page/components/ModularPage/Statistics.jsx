/* eslint-disable */
import React, { PureComponent } from 'react';

// Prop Types
import {
  statisticsListPropTypes,
  statisticsListDefaultProps,
} from '../../../Statistics/components/StatisticPropTypes';

// Components
import StatisticsBlockGrid from '../../../Statistics/components/StatisticsGrid';


// TODO REMOVE TEST DATA
import { statisticsData } from '../SampleDataFullPage';

// Declaration
class Statistics extends PureComponent {
  static propTypes = statisticsListPropTypes;
  static defaultProps = statisticsListDefaultProps;

  render() {
    // const { statistics } = this.props;
    return (
      <div>
        <StatisticsBlockGrid statistics={statisticsData} />
      </div>
    );
  }
}

// TODO connect to redux
export default Statistics;
