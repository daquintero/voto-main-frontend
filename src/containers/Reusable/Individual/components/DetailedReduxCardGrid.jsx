// Detailed Page Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Prop Types
import { DetailedReduxCardGridPropTypes } from './IndividualPropTypes';

// Redux Actions
import { getRelatedIndividuals } from '../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';

// Detailed Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = DetailedReduxCardGridPropTypes;
  componentDidMount() {
    this.props.dispatch(getRelatedIndividuals({
      sn: this.props.subsetNumber,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  }
  getMore = () => {
    this.props.dispatch(getRelatedIndividuals({
      sn: this.props.subsetNumber + 1,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  };

  render() {
    const { relatedIndividuals } = this.props;
    return (
      <div>
        <h3 className="p-2">Individuos Relacionados</h3>
        <CardGrid info={relatedIndividuals} />
        {/* TODO Check subsets are not the same as before */}
        <Row className="p-2">
          <Button
            onClick={this.getMore}
            className="small-enlarge rounded-0 text-center border-0 mx-auto bg-more text-dark"
          >
            Más Individuos
          </Button>
        </Row>
      </div>
    );
  }
}

// State Store Connection
export default connect(state => ({
  // Related Actions Information
  relatedIndividuals: state.openPage.individual.relatedIndividuals,
  subsetNumber: state.openPage.corruptionCase.subsetNumber,
}))(DetailedReduxCardGrid);

