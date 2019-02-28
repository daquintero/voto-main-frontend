// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../shared/components/404/Card';


const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4} >
          <Card />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
