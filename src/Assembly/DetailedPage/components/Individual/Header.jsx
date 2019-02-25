// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, CardImg } from 'reactstrap';

// TODO Finish image positioning

class Header extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <Col xs={12}>
        {/* Fill entire card container */}
        <Card className="page-header h-100 border-0">
          <CardImg className="rounded-circle" />
          <h2 className="pt-2 pb-0">{instance.name}</h2>
          <h4 className="pt-2 pb-2 text-muted">{instance.briefDescription}</h4>
        </Card>
      </Col>
    );
  }
}

export default Header;

