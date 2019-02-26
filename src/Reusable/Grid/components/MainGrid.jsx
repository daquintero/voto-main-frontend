// Main Grid for the important sections
// Libraries
import React, { PureComponent } from 'react';
import { Col } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Card Selector
import CardSelector from '../../../shared/components/cardSelector';

// Declaration
class MainGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instances } = this.props;
    return (
      instances && instances[2] ? (
          <>
            <Col md={6} xl={4} className="p-2">
              {CardSelector(instances[0])}
            </Col>
            <Col md={3} xl={2} className="p-2">
              {CardSelector(instances[1])}
            </Col>
            <Col md={3} xl={2} className="p-2">
              {CardSelector(instances[2])}
            </Col>
          </>
      ) : null
    );
  }
}

// TODO State Store Connection
export default MainGrid;
