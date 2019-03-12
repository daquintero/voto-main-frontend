// Absolute Imports
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Feed from './components/Feed';


const KnowledgeBase = () => (
  <div>
    <Container className="knowledge-base__header">
      <Row className="justify-content-between">
        <Col lg={8}>
          <h1>Knowledge Base</h1>
          <p>Find and share information on a range of topics on voting and politics.</p>
          <p>Download our voting manual <a href="/">here</a>.</p>
        </Col>
        <Col lg={4}>
          <img src="/img/work-chat.svg" alt="" />
        </Col>
      </Row>
    </Container>
    <Feed />
  </div>
);

export default KnowledgeBase;
