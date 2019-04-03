// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import GenericWrapper from '../../../Reusable/Grid/components/GenericWrapper';


class Presidential extends PureComponent {
  static propTypes = {
    presidentialCandidates: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    // Props
    const {
      presidentialCandidates,
    } = this.props;

    return (
      <div>
        <h4 className="p-2 m-0">
          <i className="fal fa-podium-star p-2" />
          Candidatos Presidenciales
        </h4>
        <GenericWrapper
          parentModelLabel="political.Individual"
          relatedModelLabel="noneType"
          subsetNumber={0}
          light
          instances={presidentialCandidates}
          gridClass="presidential-grid"
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { presidentialCandidates } = state.home.instances;

  return {
    presidentialCandidates,
  };
};

export default connect(mapStateToProps)(Presidential);
