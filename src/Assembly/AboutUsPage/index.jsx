// About Us Page Compendium
// Libraries
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Social from './Social';
import Who from './Who';
import Thanks from './Thanks';
import Members from './Members';
import Video from '../Video';

// Declaration
const AboutPage = () => (
    <>
      <Container fluid className="text-center p-3 py-5 p-md-5 bg-shady-layout">
        <Row>
          <Col xs={12}>
            <h2>#VotoInformado2019</h2>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Video />
        <Who />
        <Thanks />
        <Members />
        <Social />
      </Container>
    </>
);

// TODO State Store Connection
export default AboutPage;

