// Discover Candidates and Organizations Section
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';

// Declaration
class Discover extends PureComponent {
  static propTypes = {
    individuals: PropTypes.instanceOf(Array).isRequired,
    organizations: PropTypes.instanceOf(Array).isRequired,
  };
  render() {
    const { individuals, organizations } = this.props;
    return (
      <Row>
        <Col sm={12} md={6} className="p-2">
          <CardGrid
            relatedModelLabel="political.Individual"
            gridClass="variable-grid"
            instances={individuals}
            subsetNumber={0}
          />
        </Col>
        <Col sm={12} md={6} className="p-2">
          <CardGrid
            relatedModelLabel="political.Organization"
            gridClass="variable-grid"
            instances={organizations}
            subsetNumber={organizations}
          />
        </Col>
      </Row>
    );
  }
}

// TODO State Store Connection
export default Discover;
