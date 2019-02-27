// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../Reusable/FinanceItem/components/FinanceItemWP';

// One controversy
const controversy = {
  size: 'full',
  type: 'Employment',
  briefDescription: 'Some description',
  source: 'https://www.google.com',
  individuals: [{
    name: 'Danilo Perez',
  }],
};


const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4} >
          <Card instance={controversy} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
