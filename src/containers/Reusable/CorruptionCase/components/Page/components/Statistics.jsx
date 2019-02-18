import React, { PureComponent } from 'react';


// Prop Types
import {
  statisticsListPropTypes,
  statisticsListDefaultProps,
} from '../../../../Statistics/components/StatisticPropTypes';

// Components
import StatisticsBlockGrid from '../../../../Statistics/components/StatisticsGrid';

// Declaration
class Statistics extends PureComponent {
  static propTypes = statisticsListPropTypes;
  static defaultProps = statisticsListDefaultProps;

  render() {
    const { statistics } = this.props;
    return (
      <div>
        <StatisticsBlockGrid statistics={statistics} />
      </div>
    );
  }
}

// TODO connect to redux
export default Statistics;
