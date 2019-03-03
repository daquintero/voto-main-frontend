// Home Page According to their wishes
// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Video from '../Video';
import Commit from './components/Commit';
import PDF from './components/pdfPreviewer';

// Declaration
class Home extends PureComponent {
  render() {
    return (
      <>
        <Container fluid className="p-0">
          <Video />
        </Container>
        <Commit light />
        <Container>
          <Row noGutters>
            <Col md={6}>
              asdf
            </Col>
            <Col md={6} className="text-center">
              <a href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf">
                <h4 className="p-2 m-0">
                  <i className="fal fa-book-heart p-2" />
                  ¡Descarga el Manual!
                </h4>
              </a>
              <PDF />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// TODO State Store Connection
export default Home;
