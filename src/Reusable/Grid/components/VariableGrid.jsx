// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';
import { Row } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Card Selector
import CardSelector from '../../../shared/components/cardSelector';

// Declaration
class VariableGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instances } = this.props;
    return (
      <Row noGutters className="align-content-center">
        {instances && instances[0] ? (
          <div className="variable-grid">
            {instances.map(instance => (
              CardSelector(instance)
            ))}
          </div>
        ) : null}
      </Row>
    );
  }
}

// TODO State Store Connection
export default VariableGrid;
