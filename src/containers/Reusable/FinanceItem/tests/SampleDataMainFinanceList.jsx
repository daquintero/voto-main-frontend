// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row } from 'reactstrap';
import MainFinanceList from '../components/MainFinanceList';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// One statistic
// const statistic = {
//   name: 'Some statistic',
//   source: 'info',
//   value: 10,
//   icon: 'user',
// };

// // Each Compendium
// const statistics = [{
//   name: 'Some statistic',
//   source: 'info',
//   value: 10,
//   icon: 'user',
// }, {
//   name: 'Some statistic',
//   source: 'info',
//   value: 10,
//   icon: 'user',
// }, {
//   name: 'Some statistic',
//   source: 'info',
//   value: 1000,
//   icon: 'user',
// }, {
//   name: 'Some statistic',
//   source: 'info',
//   value: 10,
//   icon: 'user',
// }];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <MainFinanceList corruptionRelatedFunds={1231241.1} nonCorruptionRelatedFunds={12349829.2} />
      </Row>
    </Container>
  </div>
);

export default Scratch;
