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
          <Col xs={12}>
          {/* Fill entire card container */}
              <h2 className="p-2 pb-0">{basic.title}</h2>
              <h4 className="p-2 text-muted">{basic.description}</h4>
          </Col>
    );
  }
}

export default Header;
// // TODO Reconnect to Redux
// export default connect(state => ({
//   // Basic Page information
//   title: state.openPage.basic.title,
//   description: state.openPage.basic.description,
//   longDescription: state.openPage.basic.longDescription,
// }))(Header);
