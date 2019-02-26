// Main Grid for the important sections
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
      <Row noGutters>
        {instances && instances[3] ? (
          <div className="main-grid">
            <div className="main-1">
              {CardSelector(instances[0])}
            </div>
            <div className="main-2">
              {CardSelector(instances[1])}
            </div>
            <div className="main-2">
              {CardSelector(instances[2])}
            </div>
          </div>
        ) : null}
      </Row>
    );
  }
}

// TODO State Store Connection
export default VariableGrid;

