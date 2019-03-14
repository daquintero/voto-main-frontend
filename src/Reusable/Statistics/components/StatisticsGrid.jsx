// Statistics Block Grid

// Libraries
import React from 'react';
import { Row, Col } from 'reactstrap';

// Components
import StatisticBlock from './StatisticBlock';

const StatisticsBlockGrid = statistics => (
  <Row className="mx-auto">
    {statistics.map(instance => (
      <Col md={2} className="p-2" key={instance.id}>
        <StatisticBlock instance={instance} />
      </Col>
    ))}
  </Row>
);

export default StatisticsBlockGrid;
