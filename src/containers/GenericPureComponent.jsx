// TODO DESCRIPTION
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
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

// TODO State Store Connection
export default Whatever;


