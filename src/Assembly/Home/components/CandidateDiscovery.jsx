// Candidate Discovery
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';


// Declaration
class Candidate extends PureComponent {
  static propTypes = {
    candidates: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { candidates } = this.props;
    return (
      <div>
        <h4 className="p-2 m-0">
          <i className="fal fa-podium-star p-2" />
          ¡Descúbre tus candidatos!
        </h4>
        <CardGrid
          parentModelLabel="political.Individual"
          subsetNumber={0}
          instances={candidates}
          gridClass="variable-grid"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { candidates } = state.home;

  return {
    candidates,
  };
};

// TODO State Store Connection
export default connect(mapStateToProps)(Candidate);
