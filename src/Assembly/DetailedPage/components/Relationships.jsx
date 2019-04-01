// Relationships Section Corruption NewsLike
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import GenericGridWrapper from '../../../Reusable/Grid/components/GenericWrapper';

class Relationships extends PureComponent {
  static propTypes = {
    individuals: PropTypes.instanceOf(Object).isRequired,
    informativeSnippets: PropTypes.instanceOf(Object).isRequired,
    organizations: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      individuals, informativeSnippets, organizations,
    } = this.props;
    return (
      <Row className="overflow-hidden">
        <Col xs={12} className="p-1 bg-layout">
          <GenericGridWrapper
            relatedModelLabel="political.Organization"
            gridClass="relationships-grid"
            instances={organizations.instances}
            subsetNumber={organizations.subsetNumber}
            typeContext="detailed"
          />
        </Col>
        <Col xs={12} className="mt-2 p-1 bg-layout">
          <GenericGridWrapper
            relatedModelLabel="political.Individual"
            gridClass="relationships-grid"
            instances={individuals.instances}
            subsetNumber={individuals.subsetNumber}
            typeContext="detailed"
          />
        </Col>
        <Col xs={12} className="p-1 bg-layout">
          <GenericGridWrapper
            relatedModelLabel="corruption.InformativeSnippet"
            gridClass="variable-new-grid"
            instances={informativeSnippets.instances}
            subsetNumber={informativeSnippets.subsetNumber}
            typeContext="detailed"
          />
        </Col>
        {/* TODO Organization Card Grid */}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    individuals,
    corruptionCases,
    informativeSnippets,
    organizations,
  } = state.openPage.relatedInstances;
  return {
    individuals,
    corruptionCases,
    informativeSnippets,
    organizations,
  };
};

export default connect(mapStateToProps)(Relationships);
