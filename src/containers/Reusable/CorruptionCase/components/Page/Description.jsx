// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes, headerDefaultProps } from './PagePropTypes';

// Declaration
class Description extends PureComponent {
  static propTypes = headerPropTypes;
  static defaultProps = headerDefaultProps;
  render() {
    const { basic } = this.props;
    return (
      <div className="m-1 p-2">
        { basic.longDescription }
      </div>
    );
  }
}

export default connect(state => ({
  // Note long description is within basic for quick rendering
  basic: state.basic,
}))(Description);
