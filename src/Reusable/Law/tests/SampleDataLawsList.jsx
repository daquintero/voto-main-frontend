// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LawsList from '../Reusable/Law/components/List';

// // Each Compendium
const instances = [{
  code: 2,
  briefDescription: 'This instance talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This instance talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This instance talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This instance talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col md={4}>
          <LawsList instances={instances} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;

