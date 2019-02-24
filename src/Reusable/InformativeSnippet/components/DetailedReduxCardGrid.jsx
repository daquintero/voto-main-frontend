// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Prop Types
import { DetailedReduxCardGridPropTypes } from './InformativeSnippetPropTypes';

// Redux Actions
import { getMoreRelatedInstances } from '../../redux/actions';

// Presentational Component
import CardGrid from './CardGrid';


// Detailed DEVELOPMENT-ONLY-Page Redux Card Grid
class DetailedReduxCardGrid extends PureComponent {
  static propTypes = DetailedReduxCardGridPropTypes;

  handleGetMore = () => {
    const {
      dispatch, subsetNumber, modelLabel, parentId,
    } = this.props;
    dispatch(getMoreRelatedInstances({
      sn: subsetNumber + 1,
      ml: modelLabel,
      pid: parentId,
    }));
  };

  render() {
    const { instances } = this.props;
    return (
      <div>
        <h3 className="p-2">Noticias Relacionados</h3>
        {/* TODO Change to instances */}
        <CardGrid instances={instances} />
        {/* TODO Check subsets are not the same as before */}
        <Row className="p-2">
          <Button
            onClick={this.handleGetMore}
            className="small-enlarge rounded-0 text-center border-0 mx-auto bg-more text-dark"
          >
            Más Noticias
          </Button>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { instances, subsetNumber } = state.openPage.relatedInformativeSnippets;

  return {
    instances,
    subsetNumber,
  };
};

export default connect(mapStateToProps)(DetailedReduxCardGrid);

