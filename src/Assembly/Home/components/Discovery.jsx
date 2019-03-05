// Map candidates Discovery
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';

import { discoverCandidates } from '../redux/actions';
import Map from '../../../Reusable/Map';


// Declaration
class Discover extends Component {
  static propTypes = {
    candidates: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleOnClick = (e) => {
    const { dispatch } = this.props;
    const [gid] = e.object.properties.GID_1.split('.').slice(-1);
    dispatch(discoverCandidates(gid));
  };

  render() {
    // Props
    const {
      candidates,
    } = this.props;

    return (
      <Container>
        <Row noGutters className="m-4">
          <Col md={12} className="text-center py-4">
            <h4 className="p-2 m-0">
              <i className="fal fa-podium-star p-2" />
              ¡Descúbre tus Candidatos!
            </h4>
            <Map
              onClick={this.handleOnClick}
            />
            {/* Add some sort of control for map location */}
            <CardGrid
              parentModelLabel="political.Individual"
              relatedModelLabel="noneType"
              subsetNumber={0}
              light
              instances={candidates}
              gridClass="candidates-grid"
            />
          </Col>
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

export default connect(mapStateToProps)(Discover);
