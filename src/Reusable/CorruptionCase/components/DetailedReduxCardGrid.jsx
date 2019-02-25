// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Redux Actions
import { getMoreRelatedInstances } from '../../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';


const relatedModelLabel = 'corruption.InformativeSnippet';


// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instances: PropTypes.instanceOf(Array).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,
    subsetNumber: PropTypes.number.isRequired,
    modelLabel: PropTypes.string.isRequired,
    parentId: PropTypes.number.isRequired,
  };

  getMore = () => {
    const {
      dispatch, subsetNumber, modelLabel, parentId,
    } = this.props;
    dispatch(getMoreRelatedInstances({
      sn: subsetNumber + 1,
      ml: modelLabel,
      pid: parentId,
      rml: 'corruption.CorruptionCase',
    }));
  };

  render() {
    const {
      instances, actions,
    } = this.props;

    return (
      <div>
        <h3 className="p-2">Casos de Corrupcion Relacionados</h3>
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
    modelLabel,
    id,
    instances,
    subsetNumber,
    actions,
  };
};

export default connect(mapStateToProps)(DetailedReduxCardGrid);
