/* eslint-disable */
// Libraries
import RReact, { PureComponent } from 'react';
import { Row, Col, Card, Button, Modal, CardImg } from 'reactstrap';
// Reduxeact, { PureComponent } from 'react';
// Redux
// import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes, headerDefaultProps } from '../PagePropTypes';

// TODO REMOVE TEST DATA
import { headerData, imageTest } from '../SampleDataFullPage';

class Header extends PureComponent {
  static propTypes = headerPropTypes;
  static defaultProps = headerDefaultProps;
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  render() {
    const {
      basic
    } = headerData;
    return (
      <Card className="page-header h-100 border-0">
        <Row noGutters>
          <Col md={5}>
            <CardImg className="rounded h-100 p-2" src={imageTest}/>
          </Col>
          <Col md={7}>
            <h3 className="p-2 text-center">{basic.name}</h3>
            <h6 className="p-2 text-muted">{basic.briefDescription}</h6>
          </Col>
        </Row>
        <Row noGutters className="p-2 align-items-center">
          <Col xs={3} className="px-3 mx-auto">
            <i className="fab fa-facebook-square fa-2x" />
          </Col>
          <Col xs={3} className="px-3">
            <i className="fab fa-twitter-square fa-2x" />
          </Col>
          <Col xs={3} className="px-3">
            <i className="fa fa-browser fa-2x" />
          </Col>
          <Col xs={3} className="px-3 align-center">
            <i className="fa fa-envelope-open fa-2x" />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Header;
// // TODO Reconnect to Redux
// export default connect(state => ({
//   // Basic CorruptionCase information
//   title: state.openPage.basic.title,
//   description: state.openPage.basic.description,
//   longDescription: state.openPage.basic.longDescription,
// }))(Header);
