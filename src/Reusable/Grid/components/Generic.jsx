// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import NotFoundCard from '../../../shared/components/404/Card';

// Functions
import cardSelector from '../../../shared/components/cardSelector';
import wrapper from '../../../shared/utils/wrapper';

// Actions
import { INSTANCE_DETAIL, TOGGLE_INSTANCE_DETAIL_MODAL } from '../../redux/actionCreators';


class Generic extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object),
    gridClass: PropTypes.string.isRequired,
    relatedModelLabel: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
    typeContext: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,

    // Redux
    dispatch: PropTypes.func.isRequired,
    parentModelLabel: PropTypes.string.isRequired,
  };

  static defaultProps = {
    instances: [],
  };

  handleOnClick = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { instance } = e.currentTarget.dataset;

    dispatch({
      type: INSTANCE_DETAIL,
      instance: JSON.parse(instance),
    });
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
      location,

      // Redux
      parentModelLabel,
    } = this.props;

    return (
      instances !== null && instances.length > 0 ? (
        <>
          <div className={`${gridClass} justify-content-center`}>
            {instances.map((instance) => {
              if (instance.modelLabel) {
                return cardSelector({
                  instance,
                  typeContext: typeContext || 'relation',
                  light,
                  location,

                  // Callbacks
                  onClick: this.handleOnClick,
                });
              }

              // Copy instance and add ``modelLabel``.
              return cardSelector({
                instance: {
                  ...instance,
                  modelLabel: relatedModelLabel,
                },
                typeContext: typeContext || 'relation',
                light,
                location,

                // Callbacks
                onClick: this.handleOnClick,
              });
            })}
          </div>
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

