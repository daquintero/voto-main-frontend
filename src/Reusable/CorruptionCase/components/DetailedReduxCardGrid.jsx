// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Prop Types
import { DetailedReduxCardGridPropTypes } from './CorruptionCasePropTypes';

// Redux Actions
import { getRelatedCorruptionCases } from '../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';

// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = DetailedReduxCardGridPropTypes;

  getMore = () => {
    const {
      dispatch, subsetNumber, modelLabel, parentId,
    } = this.props;
    dispatch(getRelatedCorruptionCases({
      sn: subsetNumber + 1,
      ml: modelLabel,
      pid: parentId,
      rml: 'corruption.CorruptionCase',
    }));
  };

  render() {
    const {
      instances,
    } = this.props;

    return (
      <div>
        <h3 className="p-2">Casos de Corrupcion Relacionados</h3>
        <CardGrid info={instances} />
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
  const { instances, subsetNumber, actions } = state.openPage.relatedInformativeSnippets;

  return {
    instances,
    subsetNumber,
    actions,
  };
};


export default connect(mapStateToProps)(DetailedReduxCardGrid);

