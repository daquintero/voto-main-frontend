/* eslint-disable */
// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';
// Prop Types
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Card Selector
import CardSelector from '../../../shared/components/cardSelector';
import NFCard from '../../../shared/components/404/Card';
import typeInfo from '../../../shared/utils/typeInfo';

// Declaration
class Generic extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
    gridClass: PropTypes.string.isRequired,
    relatedModelLabel: PropTypes.string.isRequired,
    parentModelLabel: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const {
      instances,
      gridClass,
      relatedModelLabel,
      parentModelLabel,
      light,
    } = this.props;
    return (
      instances && instances[0] ? (
        <div className={gridClass}>
          {console.log(instances)}
          {instances.map(instance => (
            CardSelector(instance)
          ))}
        </div>
      ) :
        <div
          className={`mx-auto justify-content-center align-items-center ${gridClass}`}
        >
          {/* TODO PASS THIS BY PROPS */}
          <NFCard
            type={relatedModelLabel}
            parent={typeInfo[parentModelLabel].singular}
            light={light}
          />
        </div>
    );
  }
}

// TODO State Store Connection
const mapStateToProps = (state) => {
  const { modelLabel } = state.openPage.parentInstance;

  return {
    parentModelLabel: modelLabel,
  };
};

// State Store Connection
export default connect(mapStateToProps)(Generic);

// TODO DECIDE IF REMOVE
// <Col
//   xs={gridLayout[container].xs}
//   sm={gridLayout[container].sm}
//   md={gridLayout[container].md}
//   className="mx-auto"
// >
