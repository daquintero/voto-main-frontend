// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Prop Types
import { DetailedReduxCardGridPropTypes } from './InformativeSnippetPropTypes';

// Redux Actions
import { getRelatedInformativeSnippets } from '../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';

// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = DetailedReduxCardGridPropTypes;
  componentDidMount() {
    this.props.dispatch(getRelatedInformativeSnippets({
      sn: this.props.subsetNumber,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  }
  getMore = () => {
    this.props.dispatch(getRelatedInformativeSnippets({
      sn: this.props.subsetNumber + 1,
      ml: this.props.modelLabel,
      pid: this.props.parentId,
    }));
  };

  render() {
    const { relatedInformativeSnippets } = this.props;
    return (
      <div>
        <h3 className="p-2">Noticias Relacionados</h3>
        <CardGrid info={relatedInformativeSnippets} />
        {/* TODO Check subsets are not the same as before */}
        <Row className="p-2">
          <Button
            onClick={this.getMore}
            className="small-enlarge rounded-0 text-center border-0 mx-auto bg-more text-dark"
          >
            Más Noticias
          </Button>
        </Row>
      </div>
    );
  }
}

// State Store Connection
export default connect(state => ({
  // Related Actions Information
  relatedInformativeSnippets: state.openPage.informativeSnippet.relatedInformativeSnippets,
  subsetNumber: state.openPage.corruptionCase.subsetNumber,
}))(DetailedReduxCardGrid);

