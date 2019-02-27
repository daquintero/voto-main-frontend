// Detailed Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Redux Actions
import { getMoreRelatedInstances } from '../../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';

const relatedModelLabel = 'corruption.CorruptionCase';


// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instances: PropTypes.instanceOf(Array).isRequired,
    subsetNumber: PropTypes.number.isRequired,
    actions: PropTypes.instanceOf(Array).isRequired,
    parentModelLabel: PropTypes.string.isRequired,
    parentId: PropTypes.number.isRequired,
  };

  getMore = () => {
    const {
      dispatch, subsetNumber, parentModelLabel, parentId,
    } = this.props;
    dispatch(getMoreRelatedInstances({
      sn: subsetNumber + 1,
      ml: parentModelLabel,
      pid: parentId,
      rml: relatedModelLabel,
    }));
  };

  render() {
    const {
      instances, actions,
    } = this.props;

    return (
      <div>
        <h3 className="p-2">Casos de Corrupción Relacionados</h3>
        <CardGrid
          instances={instances}
          action={actions.GET_MORE_RELATED_INSTANCES[relatedModelLabel]}
        />
        {/* TODO Check subsets are not the same as before */}
        <Row className="p-2">
          <Button
            onClick={this.getMore}
            className="small-enlarge rounded-0 text-center border-0 mx-auto bg-more text-dark"
          >
            Más Casos de Corrupcion
          </Button>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.openPage;
  const { instances, subsetNumber } = state.openPage.relatedInstances.corruptionCases;
  const { modelLabel, id } = state.openPage.parentInstance;

  return {
    parentModelLabel: modelLabel,
    parentId: id,
    instances,
    subsetNumber,
    actions,
  };
};

export default connect(mapStateToProps)(DetailedReduxCardGrid);
