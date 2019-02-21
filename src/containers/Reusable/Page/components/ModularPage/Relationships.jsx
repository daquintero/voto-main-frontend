/* eslint-disable */
import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';

// Redux Actions
// import { getRelatedCorruptionCases } from '../../../redux/actions';
// import { getRelatedIndividuals } from '../../../../Individual/redux/actions';
// import { getRelatedInformativeSnippets } from '../../../../InformativeSnippet/redux/actions';
// import { getRelatedOrganizations } from '../../../../Organization/redux/actions';

// Components
import IndividualCardGrid from '../../../Individual/components/CardGrid';
import CorruptionCaseCardGrid from '../../../CorruptionCase/components/CardGrid';
import InformativeCardGrid from '../../../InformativeSnippet/components/CardGrid';

// Prop Types
import { RelationshipProps } from '../PagePropTypes';

// TODO REMOVE TEST DATA
import {individualCardData, corruptionCaseCardData, informativeSnippetCardData } from '../SampleDataFullPage';

// TODO Props validation
class Relationships extends Component {
  static propTypes = RelationshipProps;
  // TODO CONNECT TO REDUX
  // componentDidMount() {
  //   this.props.dispatch(getRelatedCorruptionCases(0, 'corruption.corruptioncase', this.props.id));
  //   this.props.dispatch(getRelatedIndividuals(0, 'individuals.individual', this.props.id));
  //   this.props.dispatch(getRelatedInformativeSnippets(0, 'corruption.informativesnippet', this.props.id));
  //   this.props.dispatch(getRelatedOrganizations(0, 'individuals.organizations', this.props.id));
  // }
  render() {
    // const { individuals, corruptionCases, informativeSnippets } = this.props;
    return (
      <Row>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#edf7ff' }}>
          <IndividualCardGrid info={individualCardData} />
        </Col>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#edf7ff' }}>
          <InformativeCardGrid info={informativeSnippetCardData} />
        </Col>
        {/* TODO Organization Card Grid */}
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#edf7ff' }}>
          <CorruptionCaseCardGrid info={corruptionCaseCardData} />
        </Col>
      </Row>
    );
  }
}

export default Relationships;
// export default connect(state => ({
//   // Related Actions Information
//   organizations: state.openPage.organization.relatedOrganizations,
//   individuals: state.openPage.individual.relatedIndividuals,
//   corruptionCases: state.openPage.corruptionCase.relatedCorruptionCases,
//   informativeSnippets: state.openPage.informativeSnippet.relatedInformativeSnippets,
// }))(Relationships);
