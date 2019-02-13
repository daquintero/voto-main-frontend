/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Redux
// import { connect } from 'react-redux';

// Containers
import { Row, Col, Card, Button } from 'reactstrap';

// Components
import Modal from './Modal';

class Header extends PureComponent {
  static propTypes = {
    basic: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
  })};
  render() {
    const {
      basic
    } = this.props;
    return (
      <div>
        <Row noGutters>
          {/* Fill entire card container */}
            <Card className="page-header">
              <h2 className="p-2 text-center">{basic.title}</h2>
              <h5 className="p-2 text-muted">{basic.description}</h5>
              <Col xs={6} md={3}>
                <Button outline color="info" className="p-2 m-2 align-bottom">
                  Averigua Más
                </Button>
              </Col>
            </Card>
          <Modal/>
        </Row>
      </div>
    );
  }
}

export default Header;
// // Redux
// export default connect(state => ({
//   // Basic Page information
//   title: state.openPage.basic.title,
//   description: state.openPage.basic.description,
//   longDescription: state.openPage.basic.longDescription,
// }))(Header);
