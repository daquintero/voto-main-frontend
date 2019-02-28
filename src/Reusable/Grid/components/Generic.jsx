// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Card Selector
import CardSelector from '../../../shared/components/cardSelector';

// Declaration
class Generic extends PureComponent {
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
            CardSelector(instance)
          ))}
        </div>
      ) : null
    );
  }
}

// TODO State Store Connection
export default Generic;
