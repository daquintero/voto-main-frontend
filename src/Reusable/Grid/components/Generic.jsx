// Grid of Variable Positions
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Card Selector
import cardSelector from '../../../shared/components/cardSelector';

// Components
import DetailModal from './DetailModal';
import NotFoundCard from '../../../shared/components/404/Card';

// Functions
import wrapper from '../../../shared/utils/wrapper';

// Actions
import { TOGGLE_INSTANCE_DETAIL_MODAL } from '../../redux/actionCreators';


// Declaration
class Generic extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object),
    gridClass: PropTypes.string.isRequired,
    relatedModelLabel: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
    typeContext: PropTypes.string.isRequired,

    // Redux
    dispatch: PropTypes.func.isRequired,
    parentModelLabel: PropTypes.string.isRequired,
    openInstance: PropTypes.instanceOf(Object).isRequired,
    instanceModalOpen: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    instances: [],
  };

  handleToggleDetailModal = () => {
    const { dispatch } = this.props;
    dispatch({
      type: TOGGLE_INSTANCE_DETAIL_MODAL,
    });
  };

  render() {
    // Props
    const {
      instances,
      gridClass,
      relatedModelLabel,
      light,
      typeContext,

      // Redux
      parentModelLabel,
      openInstance,
      instanceModalOpen,
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
            isOpen={instanceModalOpen}
            instance={openInstance}

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

