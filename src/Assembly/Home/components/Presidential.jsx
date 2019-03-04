// Presidential Discovery
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';


// Declaration
class Presidential extends PureComponent {
  static propTypes = {
    presidential: PropTypes.instanceOf(Array).isRequired,
  };
  render() {
    const { presidential } = this.props;
    return (
      <div>
        <h4 className="p-2 m-0">
          <i className="fal fa-podium-star p-2" />
              ¡Candidatos Presidenciales!
        </h4>
        <CardGrid
          parentModelLabel="political.Individual"
          relatedModelLabel="noneType"
          subsetNumber={0}
          light
          instances={presidential}
          gridClass="variable-grid"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { presidential } = state.home;

  return {
    presidential,
  };
};

// TODO State Store Connection
export default connect(mapStateToProps)(Presidential);
