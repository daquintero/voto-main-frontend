// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../components/Card';

// One controversy
const controversy = {
  type: 'Employment',
  description: 'Some description',
  source: 'https://www.google.com',
};

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4} >
          <Card objIn={controversy} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
