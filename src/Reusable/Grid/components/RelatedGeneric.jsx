// TODO FINISH
// Generic Positions
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
class VariableGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
    gridClass: PropTypes.string.isRequired,
  };
  render() {
    const { instances, gridClass } = this.props;
    return (
      instances && instances[0] ? (
        <div className={gridClass}>
          {instances.map(instance => (
           instance
          ))}
        </div>
      ) : null
    );
  }
}

// TODO State Store Connection
export default VariableGrid;
