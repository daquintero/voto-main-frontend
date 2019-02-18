import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FinanceItem extends PureComponent {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>{this.props.hi}</div>
    );
  }
}

export default FinanceItem;
