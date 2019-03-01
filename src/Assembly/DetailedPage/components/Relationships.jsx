// Relationships Section Corruption NewsLike
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import CardGrid from '../../../Reusable/Grid/components/Related/DetailedReduxCardGrid';

class Relationships extends PureComponent {
  static propTypes = {
    individuals: PropTypes.instanceOf(Object).isRequired,
    corruptionCases: PropTypes.instanceOf(Object).isRequired,
    informativeSnippets: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { individuals, corruptionCases, informativeSnippets } = this.props;
    return (
      <Row>
        <Col xs={12} className="mt-2 p-1 bg-shady-layout">
          <CardGrid
            relatedModelLabel="political.Individual"
            gridClass="variable-grid"
            instances={individuals.instances}
            subsetNumber={individuals.subsetNumber}
          />
        </Col>
        <Col xs={12} className="p-1 bg-middle-layout">
          <CardGrid
            relatedModelLabel="corruption.CorruptionCase"
            gridClass="variable-grid"
            instances={corruptionCases.instances}
            subsetNumber={corruptionCases.subsetNumber}
          />
        </Col>
        {/* TODO Organization Card Grid */}
        <Col xs={12} className="p-1 bg-shady-layout">
          <CardGrid
            relatedModelLabel="corruption.InformativeSnippet"
            gridClass="variable-grid"
            instances={informativeSnippets.instances}
            subsetNumber={informativeSnippets.subsetNumber}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { individuals, corruptionCases, informativeSnippets } = state.openPage.relatedInstances;
  return {
    individuals,
    corruptionCases,
    informativeSnippets,
  };
};

export default connect(mapStateToProps)(Relationships);
