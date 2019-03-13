// Home Page According to their wishes
// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import moment from 'moment';

// Components
import Video from '../Video';
import Commit from './components/Commit';
import PDF from './components/pdfPreviewer';
import Candidates from './components/Presidential';
import Search from './components/Search';
import ErrorBoundary from '../../shared/components/ErrorBoundary';

// Actions
import { getHome } from './redux/actions';
import Discovery from './components/Discovery';


// Declaration
class Home extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
  };
  // TODO ADD WHATSAPP
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getHome());
  }
  render() {
    return (
      <>
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
        <Container className="p-0">
          <Row className="pt-5 mt-5 pb-3 mb-3">
            <Col lg={7}>
              <Video />
            </Col>
            <Col lg={5} className="mt-5 pt-2 mt-lg-0 pt-lg-0">
              <Row noGutters className="pt-2 pb-2 justify-content-center">
                <Col xs={12} noGutters className="pb-2 text-center m-md-0">
                  <h5 className="pb-2 m-0 notice">Compromėtete a un &nbsp;
                    <span className="sl">#VotoInformado2019</span>
                  </h5>
                </Col>
                <Col md={6} lg={12} className="pb-0">
                  <Commit light />
                </Col>
                <hr className="w-75 pt-0 pb-2" style={{ borderColor: 'rgba(black, 0.5)' }} />
                <div
                  className="align-content-center
                  text-center w-100  justify-content-center"
                >
                  <h5>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://verificate.pa/"
                      className="my-auto align-content-center"
                    >
                      <i className="fal fa-vote-yea p-2 inv-spin" />
                    ¡Encuentra tu centro de votación!
                    </a>
                  </h5>
                  <h5>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.holapraxis.com/voluntarios"
                      className="my-auto"
                    >
                      <i className="fal fa-bolt p-2 spin-clock" />
                      ¿Quiéres ser voluntario?
                    </a>
                  </h5>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="py-3">
          <ErrorBoundary>
            <Discovery />
          </ErrorBoundary>
        </div>
        <div className="bg-shady-layout">
          <Container className="bg-shady-layout py-4">
            <Row noGutters>
              <Col md={6} className="text-center p-2">
                <Candidates />
              </Col>
              <Col md={6} className="text-center p-2">
                <h4 className="m-0 p-2">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                    className="p-2"
                  >
                    <i className="fal fa-book-heart p-2" />
                    ¡Descarga el Manual de Cívica Electoral Gratis!
                  </a>
                </h4>
                <PDF />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default connect()(Home);
