// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../Reusable/Individual/components/Promise/components/CardGrid';

// One controversy
const controversy = [{
  size: 'full',
  type: 'Employment',
  briefDescription: 'Some description',
  source: 'https://www.google.com',
}, {
  size: 'full',
  type: 'Employment',
  briefDescription: 'Some description',
  source: 'https://www.google.com',
}, {
  size: 'full',
  type: 'Employment',
  briefDescription: 'Some description',
  source: 'https://www.google.com',
}, {
  size: 'full',
  type: 'Employment',
  briefDescription: 'Some description',
  source: 'https://www.google.com',
},
];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4} >
          <Card info={controversy} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;