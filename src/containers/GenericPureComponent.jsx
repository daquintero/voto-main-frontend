import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Whatever extends PureComponent {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>{this.props.hi}</div>
    );
  }
}

export default Whatever;


