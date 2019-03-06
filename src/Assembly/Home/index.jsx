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

// Actions
import { getHome } from './redux/actions';
import Discovery from './components/Discovery';
import StudioProm from './components/StudioProm';


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
        <Container className="p-0 my-5">
          <Row>
            <Col xl={6}>
              <Video />
            </Col>
            <Col xl={6}>
              <Row noGutters className="pt-5 pb-2 justify-content-center">
                <Col xs={12} noGutters className="pb-2 text-center m-md-0">
                  <h5 className="pb-4 m-0 notice">Compromėtete a un &nbsp;
                    <span className="sl">#VotoInformado2019</span>
                  </h5>
                </Col>
                <Col md={6}>
                  <Commit light />
                </Col>
                <Col className="text-center w-100" md={6}>
                  <a target="_blank" rel="noreferrer noopener" href="http://verificate.pa/">
                    <div className="py-4 mb-3 small-enlarge shadow w-100">
                      <h5>
                        <i className="fal fa-vote-yea p-2" />
                      ¡Encuentra tu centro de votación!
                      </h5>
                    </div>
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="https://www.holapraxis.com/voluntarios">
                    <div className="py-4 my-4 small-enlarge shadow w-100">
                      <h5>
                        <i className="fal fa-bolt p-2" />
                      ¡Voluntariado con Praxis!
                      </h5>
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Search />
        <Discovery />
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
        </div>
        <StudioProm />
      </>
    );
  }
}

export default connect()(Home);
