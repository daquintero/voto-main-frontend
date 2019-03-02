// Controvery, Experience, Promises and More
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../../Reusable/Grid/components/Related/DetailedReduxCardGrid';

class Relationships extends PureComponent {
  static propTypes = {
    experience: PropTypes.instanceOf(Array).isRequired,
    promise: PropTypes.instanceOf(Object).isRequired,
    controversy: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { experience, promise, controversy } = this.props;
    return (
      <Row>
        <Col xs={6} className="mt-2 p-1 bg-layout">
          <Row noGutters className="justify-content-center p-0">
            <CardGrid
              relatedModelLabel="political.Experience"
              gridClass="variable-grid"
              instances={experience}
              subsetNumber={experience}
            />
          </Row>
        </Col>
        <Col xs={6} className="mt-2 p-1 bg-layout">
          <Row noGutters>
            <CardGrid
              relatedModelLabel="political.Controversy"
              gridClass="variable-grid"
              instances={controversy}
              subsetNumber={controversy}
            />
          </Row>
        </Col>
        <Col xs={6} className="mt-2 p-1 bg-layout">
          <Row noGutters>
            <CardGrid
              relatedModelLabel="political.Promise"
              gridClass="variable-grid"
              instances={promise}
              subsetNumber={promise}
            />
          </Row>
        </Col>
        <Col xs={6} className="mt-2 p-1 bg-layout">
          <Row noGutters>
            <CardGrid
              relatedModelLabel="political.Promise"
              gridClass="variable-grid"
              instances={promise}
              subsetNumber={promise}
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { experience } = state.openPage.parentInstance;
  const { promise, controversy } = state.openPage.relatedInstances;
  return {
    experience,
    promise,
    controversy,
  };
};

export default connect(mapStateToProps)(Relationships);
