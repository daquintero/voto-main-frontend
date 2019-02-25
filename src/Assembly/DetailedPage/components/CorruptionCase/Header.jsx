// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';


class Header extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <Col xs={12} className="p-0 m-0">
        {/* Fill entire card container */}
        <h2 className="pt-2 pb-0">{instance.title}</h2>
        <h4 className="pt-2 pb-2 text-muted">{instance.description}</h4>
      </Col>
    );
  }
}

export default Header;
