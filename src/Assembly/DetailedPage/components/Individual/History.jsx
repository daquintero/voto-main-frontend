// Controvery, Experience, Promises and More
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../../Reusable/Grid/components/Related/DetailedReduxCardGrid';

class Relationships extends PureComponent {
  static propTypes = {
    experience: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { experience } = this.props;
    return (
      <Row>
        <Col xs={12} className="mt-2 p-1 bg-shady-layout">
          <CardGrid
            relatedModelLabel="political.Experience"
            gridClass="variable-grid"
            instances={experience.instances}
            subsetNumber={experience.subsetNumber}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { experience } = state.openPage.parentInstance;
  return {
    experience,
  };
};

export default connect(mapStateToProps)(Relationships);
