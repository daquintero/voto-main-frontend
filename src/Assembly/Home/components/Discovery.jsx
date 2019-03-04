/* eslint-disable */
// Map candidates Discovery
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';

import { discoverCandidates } from '../redux/actions';

// Declaration
class Discover extends PureComponent {
  static propTypes = {
    candidates: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  changeLocation = (gid) => {
    const { dispatch } = this.props;
    dispatch(discoverCandidates(gid));
  };

  render() {
    const { candidates } = this.props;
    return (
      <Container>
        <Row noGutters>
          <Col md={4} className="text-center py-4">
            {/* Add some sort of control for map location */}
            <h4 className="p-2 m-0">
              <i className="fal fa-podium-star p-2" />
              ¡Descúbre tus Candidatos!
            </h4>
            <CardGrid
              parentModelLabel="political.Individual"
              relatedModelLabel="noneType"
              subsetNumber={0}
              light
              instances={candidates}
              gridClass="variable-grid"
            />
          </Col>
          {/* Add map here */}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { candidates } = state.home.discover;

  return {
    candidates,
  };
};

// TODO State Store Connection
export default connect(mapStateToProps)(Discover);
