/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Containers
import { Row, Col, Card } from 'reactstrap';

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,

  };
  render() {
    const {
      title,
      description,
      longDescription,
    } = this.props;
    return (
      <div>
        <Row noGutters>
          {/* Fill entire card container */}
          <Col xs={12}>
            <Card>
              <h2>{title}</h2>
              {description}
              {longDescription}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({
  // Basic Page information
  title: state.openPage.basic.title,
  description: state.openPage.basic.description,
  longDescription: state.openPage.basic.longDescription,
}))(Header);
