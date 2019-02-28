// About Us Page Compendium
// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Video from './Video';
import Social from './Social';
import Who from './Who';

// Declaration
class AboutPage extends PureComponent {
  render() {
    return (
          <>
            <Container fluid className="text-center p-5 bg-shady-layout">
              <Row>
                <Col xs={12}>
                  <h2>#VotoInformado2019</h2>
                </Col>
              </Row>
            </Container>
            <Container fluid className="p-0">
              <Video />
            </Container>
            <Container>
              <Row noGutters className="my-5">
                <Who />
              </Row>
            </Container>
            <Container className="p-0">
              <Social />
            </Container>
          </>
    );
  }
}

// TODO State Store Connection
export default AboutPage;

