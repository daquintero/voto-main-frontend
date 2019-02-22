// Detailed Page Redux Card Grid with Pagination
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

// Detailed Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = DetailedReduxCardGridPropTypes;
  componentDidMount() {
    this.props.dispatch(getRelatedCorruptionCases({
      sn: this.props.subsetNumber,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  }
  getMore = () => {
    this.props.dispatch(getRelatedCorruptionCases({
      sn: this.props.subsetNumber + 1,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  };

  render() {
    const { relatedCorruptionCases } = this.props;
    return (
      <div>
        <h3 className="p-2">Casos de Corrupcion Relacionados</h3>
        <CardGrid info={relatedCorruptionCases} />
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

// State Store Connection
export default connect(state => ({
  // Related Actions Information
  relatedCorruptionCases: state.openPage.corruptionCase.relatedCorruptionCases,
  subsetNumber: state.openPage.corruptionCase.subsetNumber,
}))(DetailedReduxCardGrid);

