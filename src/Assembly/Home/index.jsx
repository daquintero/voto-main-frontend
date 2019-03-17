// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

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


const sep = `${process.env.PUBLIC_URL}/img/star-separator.svg`;


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
        {/* Search */}
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>

        {/* Separator */}
        <img src={sep} alt="" className="sep" />

        {/* Video */}
        <Container className="py-5">
          <Video />
        </Container>

        {/* Candidates */}
        <div className="bg-shady-layout py-5">
          <Container>
            <Candidates />
          </Container>
        </div>

        {/* Discovery */}
        <div className="py-5">
          <ErrorBoundary>
            <Discovery />
          </ErrorBoundary>
        </div>

        {/* Info */}
        <div className="bg-shady-layout">
          <Container className="bg-shady-layout py-4">
            <Row noGutters>
              <Col md={6} className="text-center p-2 mt-1">
                <Row noGutters className="pt-2 pb-2 justify-content-center">
                  <Col xs={12} noGutters className="pb-2 text-center m-md-0">
                    <h4 className="pb-2 m-0 notice">Compromėtete a un &nbsp;
                      <span className="sl">#VotoInformado2019</span>
                    </h4>
                  </Col>
                  <Col md={12} xl={12} className="pb-0">
                    <Commit />
                  </Col>
                  <hr className="w-75 pt-0 pb-2" style={{ borderColor: 'rgba(black, 0.5)' }} />
                  <div
                    className="align-content-center text-center w-100  justify-content-center"
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
              <Col md={6} className="text-center p-2">
                <h4 className="m-0 p-2">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                    className="p-2"
                  >
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
