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

// Declaration
class Generic extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
    gridClass: PropTypes.string.isRequired,
    relatedModelLabel: PropTypes.string.isRequired,
    parentModelLabel: PropTypes.string.isRequired,
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
          {instances.map((instance) => {
            if (instance.modelLabel) {
              return CardSelector(instance, 'relation', light);
            }
            const withLabel = instance;
            withLabel.modelLabel = relatedModelLabel;
            return CardSelector(withLabel, 'relation', light);
          })}
        </div>
      ) :
        <div
          className={`mx-auto justify-content-center align-items-center ${gridClass}`}
        >
          <NFCard
            type={relatedModelLabel}
            parent={parentModelLabel || 'noneParent'}
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
