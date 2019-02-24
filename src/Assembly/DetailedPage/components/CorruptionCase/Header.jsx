// CorruptionCase Header
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

// Redux
import { connect } from 'react-redux';

// Prop Types

class Header extends PureComponent {
  static propTypes = PropTypes.instanceOf(Object).isRequired;

  render() {
    const {
      basic,
    } = this.props;
    return (
      <Col xs={12} className="p-0 m-0">
        {/* Fill entire card container */}
        <h2 className="pt-2 pb-0">{basic.title}</h2>
        <h4 className="pt-2 pb-2 text-muted">{basic.description}</h4>
      </Col>
    );
  }
}

export default connect(state => ({
  // Basic CorruptionCase information
  parentInstance: state.openPage.basic,
}))(Header);
