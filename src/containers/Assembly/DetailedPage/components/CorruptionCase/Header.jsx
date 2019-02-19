// CorruptionCase Header
// Libraries
import React, { PureComponent } from 'react';
import { Col } from 'reactstrap';

// Redux
import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes, headerDefaultProps } from './PagePropTypes';

class Header extends PureComponent {
  static propTypes = headerPropTypes;
  static defaultProps = headerDefaultProps;
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
  basic: state.openPage.basic,
}))(Header);
