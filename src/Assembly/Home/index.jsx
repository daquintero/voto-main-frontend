// General Home CorruptionCase Index
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

// Components
import Map from '../../Reusable/Map';


const Home = () => (
  <Row className="home__map__wrapper">
    <Container>
      <div className="py-5">
        <Map />
      </div>
      <Row>
        <Col>
          <div />
        </Col>
      </Row>
    </Container>
  </Row>
);

export default Home;
