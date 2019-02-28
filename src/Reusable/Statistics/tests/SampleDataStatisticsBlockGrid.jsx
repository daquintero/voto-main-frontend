// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row } from 'reactstrap';
import StatisticsBlockGrid from '../components/StatisticsGrid';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// One instance
// const instance = {
//   name: 'Some instance',
//   source: 'info',
//   value: 10,
//   icon: 'user',
// };

// // Each Compendium
const statistics = [{
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some instance',
  source: 'info',
  value: 10,
  icon: 'user',
}];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <StatisticsBlockGrid statistics={statistics} />
      </Row>
    </Container>
  </div>
);

export default Scratch;
