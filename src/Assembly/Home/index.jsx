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
import BackToTop from '../../shared/components/BackToTop';

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
        <BackToTop />
        <Container className="p-0 my-5">
          <Row>
            <Col xl={7}>
              <Video />
            </Col>
            <Col xl={5}>
              <Row noGutters className="pt-2 pb-2 justify-content-center">
                <Col xs={12} noGutters className="pb-2 text-center m-md-0">
                  <h5 className="pb-4 m-0 notice">Compromėtete a un &nbsp;
                    <span className="sl">#VotoInformado2019</span>
                  </h5>
                </Col>
                <Col md={6} xl={12} className="pb-4">
                  <Commit light />
                </Col>
                <Col
                  className="text-center w-100 justify-content-center bg-above-background"
                  md={6}
                  xl={12}
                >
                  {/* hr className="w-75 m-2" style={{ color: rgba(black, 0.5) }} /> */}
                  <div className="my-3 w-100 h-100 align-content-center my-auto mincontent">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://verificate.pa/"
                      className="my-auto align-content-center"
                    >
                      <h5>
                        <i className="fal fa-vote-yea p-2 inv-spin" />
                      ¡Encuentra tu centro de votación!
                      </h5>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.holapraxis.com/voluntarios"
                      className="my-auto"
                    >
                      <h5>
                        <i className="fal fa-bolt p-2 spin-clock" />
                        ¡Voluntariado con Praxis!
                      </h5>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
        <ErrorBoundary>
          <Discovery />
        </ErrorBoundary>
        <div className="bg-shady-layout">
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
                  className="p-2 "
                >
                  <h4 className="m-0">
                    <i className="fal fa-book-heart p-2" />
                    ¡Descarga el Manual!
                  </h4>
                  <p className="m-0">O tócame abajo</p>
                </a>
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
