// CorruptionCase Header
// Libraries
import React, { PureComponent } from 'react';
import { Card, Col, CardImg } from 'reactstrap';

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
      <Col xs={12}>
        {/* Fill entire card container */}
        <Card className="page-header h-100 border-0">
          <CardImg className="rounded-circle" />
          <h2 className="pt-2 pb-0">{basic.title}</h2>
          <h4 className="pt-2 pb-2 text-muted">{basic.description}</h4>
        </Card>
      </Col>
    );
  }
}

export default connect(state => ({
  // Basic CorruptionCase information
  basic: state.openPage.basic,
}))(Header);
