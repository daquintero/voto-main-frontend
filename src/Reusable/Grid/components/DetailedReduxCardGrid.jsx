// Detailed  Redux Card Grid with Pagination
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';

// Actions
import { getMoreRelatedInstances } from '../../redux/actions';

// Presentational Component
import CardGrid from './Generic';
import typeInfo from '../../../shared/utils/typeInfo';

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

    // Variable Props
    relatedModelLabel: PropTypes.string.isRequired,
    gridClass: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
  };

  handleGetMore = () => {
    const {
      dispatch, subsetNumber, parentModelLabel, parentId, relatedModelLabel,
    } = this.props;
    dispatch(getMoreRelatedInstances({
      sn: parseInt(subsetNumber, 10) + 1,
      ml: parentModelLabel,
      pid: parentId,
      rml: relatedModelLabel,
    }));
  };

  render() {
    const {
      instances,
      actions,
      relatedModelLabel,
      gridClass,
      light,
    } = this.props;

    return (
      <div>
        <h4 className="p-2 rel text-center">{typeInfo[relatedModelLabel].title}</h4>
        <CardGrid
          instances={instances}
          action={actions.GET_MORE_RELATED_INSTANCES[relatedModelLabel]}
          gridClass={gridClass}
          relatedModelLabel={relatedModelLabel}
          light={light}
        />
        {/* TODO Check subsets are not the same as before */}
        <Row noGutters className="p-2">
          <Button
            onClick={this.handleGetMore}
            className={`${light ? 'bg-layout' : 'bg-shady-layout'}
            small-enlarge rounded-0 text-center border-0 mx-auto more text-dark`}
          >
            Más {typeInfo[relatedModelLabel].title}
          </Button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { actions } = state.openPage;
  // TODO Pass through normal props
  // const { instances, subsetNumber } = // NEXT LINE WRONG NO THIS.PROPS
  //   state.openPage.relatedInstances.individuals;
  const { modelLabel, id } = state.openPage.parentInstance;

  return {
    parentModelLabel: modelLabel,
    parentId: id,
    // instances,
    // subsetNumber,
    actions,
  };
};

// State Store Connection
export default connect(mapStateToProps)(DetailedReduxCardGrid);

