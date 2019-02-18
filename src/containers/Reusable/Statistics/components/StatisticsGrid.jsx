// Statistics Block Grid

// Libraries
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';

// Props
import { statisticsListPropTypes } from './StatisticPropTypes';

// Components
import StatisticBlock from './StatisticBlock';

class StatisticsBlockGrid extends PureComponent {
  static propTypes = statisticsListPropTypes;

  render() {
    const { statistics } = this.props;
    return (
      <Row className="mx-auto">
        { statistics.map(statistic => (
          <Col xs={4} md={2} className="p-2">
            <StatisticBlock statistic={statistic} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default StatisticsBlockGrid;
