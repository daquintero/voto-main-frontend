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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getHome());
  }
  render() {
    return (
      <>
        <Container className="p-0 my-5">
          <Row>
            <Col xl={8}>
              <Video />
            </Col>
            <Col>
              <Commit light />
              <Col className="text-center w-100">
                <a target="_blank" rel="noreferrer noopener" href="http://verificate.pa/">
                  <div className="py-4 small-enlarge shadow w-100">
                    <h4>
                      <i className="fal fa-vote-yea p-2" />
                      ¡Encuentra tu centro de votación!
                    </h4>
                  </div>
                </a>
              </Col>
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
