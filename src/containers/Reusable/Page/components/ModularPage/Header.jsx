/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';
import { Row, Col, Card, Button, Modal } from 'reactstrap';
// Redux
// import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes, headerDefaultProps } from '../PagePropTypes';

// TODO REMOVE TEST DATA
import { headerData } from '../SampleDataFullPage';

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
        <Row noGutters className="h-100">
          <Col xs={12}>
          {/* Fill entire card container */}
            <Card className="page-header h-100">
              <h2 className="p-4 text-center">{basic.title}</h2>
              <h4 className="p-4 text-muted">{basic.description}</h4>
            </Card>
          </Col>
        </Row>
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
