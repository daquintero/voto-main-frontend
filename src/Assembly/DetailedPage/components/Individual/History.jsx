// Component collection for promises, controversies, and experience
// TODO Controvery section
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Components Imports
// import Controversy from '../../../../Reusable/Individual/components/Controversy/'

// Declaration
class History extends PureComponent {
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
export default History;


