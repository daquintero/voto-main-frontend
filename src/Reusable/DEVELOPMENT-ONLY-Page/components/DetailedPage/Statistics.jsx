/* eslint-disable */
// Statistics Block Grid

// Libraries
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';

// Components
import StatisticBlock from '../../../Statistics/components/StatisticBlock';

// TODO REMOVE TEST DATA
import { statisticsData } from '../SampleDataFullPage';

class Statistics extends PureComponent {

  render() {
    // const { statistics } = this.props;
    return (
      <Row className="mx-auto">
        { statisticsData.map(statistic => (
          <Col md={6} className="p-2">
            <StatisticBlock statistic={statistic} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Statistics;
