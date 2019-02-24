/* eslint-disable */
// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';
import { Row } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Card Selector
import CardSelector from '../../../shared/utils/cardSelector';

// Declaration
class VariableGrid extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { data } = this.props;
    return (
      <Row noGutters>
        {data && data[0] ? (
          <div className="variable-grid">
            {data.map(instance => (
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

