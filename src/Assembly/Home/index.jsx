// Home Page According to their wishes
// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Video from '../Video';
import Commit from './components/Commit';
import PDF from './components/pdfPreviewer';
import Candidates from './components/Presidential';

// Actions
import { getHome } from './redux/actions';
import Discovery from './components/Discovery';

// Declaration
class Home extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getHome());
  }
  render() {
    return (
      <>
        <Container fluid className="p-0">
          <Video />
        </Container>
        <Commit light />
        <Container className="bg-shady-layout py-4">
          <Row noGutters>
            <Col md={6} className="text-center p-2">
              <Candidates />
            </Col>
            <Col md={6} className="text-center p-2">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
              >
                <h4 className="p-2 m-0">
                  <i className="fal fa-book-heart p-2" />
                  ¡Descarga el Manual!
                </h4>
              </a>
              <PDF />
            </Col>
          </Row>
        </Container>
        <Discovery />
      </>
    );
  }
}

// TODO State Store Connection
export default connect()(Home);
