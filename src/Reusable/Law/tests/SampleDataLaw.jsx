// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../Reusable/Law/components/Card';

const instance = {
  size: 'full',
  type: 'instance',
  code: 90,
  briefDescription: 'A brief description about the issues that come up',
  category: 'Employment',
  source: 'https://www.google.com',
};

// Test Sample Data
// const data = [{
//   size: 'full',
//   title: 'Alguna Information asdfasd ',
//   type: 'Employment',
//   description: 'Descripcion',
//   organization: 'Some organization',
// }, {
//   size: 'full',
//   title: 'Alguna Information asdfasd ',
//   type: 'Employment',
//   description: 'Descripcion',
//   organization: 'Some organization',
// }, {
//   size: 'full',
//   title: 'Alguna Information asdfasd ',
//   type: 'Employment',
//   description: 'Descripcion',
//   organization: 'Some organization',
// }, {
//   size: 'full',
//   title: 'Alguna Information asdfasd ',
//   type: 'Employment',
//   description: 'Descripcion',
//   organization: 'Some organization',
// },
// ];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row noGutters>
        <Col xs={4}>
          <Card instance={instance} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
