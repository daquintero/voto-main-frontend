// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StatisticsList from '../components/StatisticsList';
import StatisticBlock from '../components/StatisticBlock';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// One statistic
const statistic = {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
};

// // Each Compendium
const statistics = [{
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4}>
          <StatisticBlock statistic={statistic} />
          <StatisticsList statistics={statistics} />
        </Col>
        ajksdjkds
      </Row>
    </Container>
  </div>
);

export default Scratch;
