// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../components/Card';

// One experience
const experience = {
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
};

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4} >
          <Card instance={experience} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
