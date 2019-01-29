// General Home Page Index
// TODO input might be moved to menu
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
} from 'reactstrap';

const Home = () => (
  <Container>
    <Row>
      <Col>
        <FormGroup>
          <Input
            type="string"
            name="text"
            id="homeSearch"
            placeholder="Investiga!"
          />
        </FormGroup>
      </Col>
    </Row>
  </Container>
);

export default Home;
