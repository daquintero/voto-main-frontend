// Grid of Variable Positions
// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Card Selector
import cardSelector from '../../../shared/components/cardSelector';

// Components
import DetailModal from './DetailModal';
import NotFoundCard from '../../../shared/components/404/Card';

// Functions
import wrapper from '../../../shared/utils/wrapper';


// Declaration
class Generic extends Component {
  static propTypes = {
    instances: PropTypes.instanceOf(Object),
    gridClass: PropTypes.string.isRequired,
    relatedModelLabel: PropTypes.string.isRequired,
    parentModelLabel: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
    typeContext: PropTypes.string.isRequired,
  };

  static defaultProps = {
    instances: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      detailModalOpen: false,
    };
  }

  handleToggleDetailModal = () => {
    this.setState(prevState => ({
      detailModalOpen: !prevState.detailModalOpen,
    }));
  };

  render() {
    // State
    const {
      detailModelOpen,
    } = this.state;

    // Props
    const {
      instances,
      gridClass,
      relatedModelLabel,
      parentModelLabel,
      light,
      typeContext,
    } = this.props;

    return (
      instances !== null && instances.length > 0 ? (
        <>
          <div className={gridClass}>
            {instances.map((instance) => {
              if (instance.modelLabel) {
                return cardSelector(instance, typeContext || 'relation', light);
              }

              // Copy instance
              const instanceWithLabel = { ...instance };
              instanceWithLabel.modelLabel = relatedModelLabel;
              return cardSelector(instanceWithLabel, typeContext || 'relation', light);
            })}
          </div>

          {/* Detail Modal */}
          <DetailModal
            isOpen={detailModelOpen}

            // Callbacks
            toggle={this.handleToggleDetailModal}
          />
        </>
      ) : (
        <div
          className={`mx-auto justify-content-center align-items-center ${gridClass}`}
        >
          <NotFoundCard
            type={relatedModelLabel}
            parent={parentModelLabel || 'noneParent'}
            light={light}
          />
        </div>
      )
    );
  }
}


const mapStateToProps = (state) => {
  const { modelLabel } = state.openPage.parentInstance;

  return {
    parentModelLabel: modelLabel,
  };
};


export default wrapper({
  component: Generic,
  wrappers: [
    connect(mapStateToProps),
  ],
});

