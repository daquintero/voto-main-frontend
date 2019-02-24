// Statistics Block Grid

// Libraries
import React from 'react';
import { Row, Col } from 'reactstrap';

// Components
import StatisticBlock from './StatisticBlock';

const StatisticsBlockGrid = statistics => (
  <Row className="mx-auto">
    { statistics.map(statistic => (
      <Col md={2} className="p-2">
        <StatisticBlock statistic={statistic} />
      </Col>
        ))}
  </Row>
);

export default StatisticsBlockGrid;
