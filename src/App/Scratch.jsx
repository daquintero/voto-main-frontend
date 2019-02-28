// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../Reusable/Individual/components/Resource/components/Card';

// One controversy
const controversy = {
  title: 'Some description',
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
