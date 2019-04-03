// Detailed  Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Components
import GenericGrid from './Generic';

// Misc
import typeInfo from '../../../shared/utils/typeInfo';


class GenericWrapper extends PureComponent {
  static propTypes = {
    // Redux
    instances: PropTypes.instanceOf(Array),
    actions: PropTypes.instanceOf(Array).isRequired,

    // Variable Props
    relatedModelLabel: PropTypes.string.isRequired,
    gridClass: PropTypes.string.isRequired,
    typeContext: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
    getMoreEnabled: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,

    // Callbacks
    getMore: PropTypes.func,
  };

  static defaultProps = {
    // Redux
    instances: [],

    // Callbacks
    getMore: () => {},
  };

  // As this is a general component the implementation of some "getMore" function
  // will vary depending on where and how this component is used. So we let the
  // getMore function be defined the component(s) that mount this one and pass
  // it down through props.

  render() {
    const {
      instances,
      relatedModelLabel,
      gridClass,
      light,
      typeContext,
      getMore,
      getMoreEnabled,
      location,

      // Redux
      actions,
    } = this.props;

    return (
      <>
        {typeContext === 'detailed' && (
          <Row noGutters className="w-100 pl-4 justify-content-center">
            <h4 className="p-2 rel text-center">{typeInfo[relatedModelLabel].title}</h4>
          </Row>
        )}
        <GenericGrid
          instances={instances}
          action={actions.GET_MORE_RELATED_INSTANCES[relatedModelLabel]}
          gridClass={gridClass}
          relatedModelLabel={relatedModelLabel}
          light={light}
          typeContext={typeContext}
          location={location}
        />
        {getMoreEnabled && (
          <Row noGutters className="p-2">
            <Button
              onClick={getMore}
              className={`${light ? 'bg-layout' : 'bg-shady-layout'}
            small-enlarge rounded-0 text-center border-0 mx-auto more text-dark`}
            >
              Más {typeInfo[relatedModelLabel].title}
            </Button>
          </Row>
        )}
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.openPage;

  return {
    actions,
  };
};

// State Store Connection
export default connect(mapStateToProps)(GenericWrapper);

