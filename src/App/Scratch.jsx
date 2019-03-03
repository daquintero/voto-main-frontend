// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from '../Reusable/SocialShare/components/MailchimpForm';

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col xs={12}>
          <Form subscribedNumber={12} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
