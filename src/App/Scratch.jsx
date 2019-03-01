// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col xs={3}>
          <a className="twitter-timeline" href="https://twitter.com/NitoCortizo?ref_src=twsrc%5Etfw">Tweets by
            NitoCortizo
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
