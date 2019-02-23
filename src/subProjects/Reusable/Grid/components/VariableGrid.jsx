// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';

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
      <>
        {data && data[0] ? (
          <>
            {/* TODO FIND A WAY TO ITERATE TWO INDICES AT SAME TIME*/}
            {data.map(objIn => (
              CardSelector(objIn)
            ))}
          </>
        ) : null}
      </>
    );
  }
}

// TODO State Store Connection
export default VariableGrid;

