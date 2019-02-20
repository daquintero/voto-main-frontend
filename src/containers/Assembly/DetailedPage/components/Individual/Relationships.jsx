// Relationships Section Corruption CorruptionCase
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';

// Redux Actions
import { getRelatedCorruptionCases } from '../../../../Reusable/CorruptionCase/redux/actions';
import { getRelatedIndividuals } from '../../../../Reusable/Individual/redux/actions';
import { getRelatedInformativeSnippets } from '../../../../Reusable/InformativeSnippet/redux/actions';
import { getRelatedOrganizations } from '../../../../Reusable/Organization/redux/actions';

// Components
import IndividualCardGrid from '../../../../Reusable/Individual/components/CardGrid';
import CorruptionCaseCardGrid from '../../../../Reusable/CorruptionCase/components/CardGrid';
import InformativeCardGrid from '../../../../Reusable/InformativeSnippet/components/CardGrid';

// Prop Types
import { RelationshipProps } from './PagePropTypes';

// TODO Props validation
class Relationships extends Component {
  static propTypes = RelationshipProps;
  componentDidMount() {
    this.props.dispatch(getRelatedCorruptionCases(0, 'corruption.corruptioncase', this.props.id));
    this.props.dispatch(getRelatedIndividuals(0, 'individuals.individual', this.props.id));
    this.props.dispatch(getRelatedInformativeSnippets(0, 'corruption.informativesnippet', this.props.id));
    this.props.dispatch(getRelatedOrganizations(0, 'individuals.organizations', this.props.id));
  }
  render() {
    const { individuals, corruptionCases, informativeSnippets } = this.props;
    return (
      <Row>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#d5dff8' }}>
          <h3 className="p-2">Individuos Relacionados</h3>
          <IndividualCardGrid info={individuals} />
        </Col>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#f8d5df' }}>
          <h3 className="p-2">Noticias Relacionadas</h3>
          <InformativeCardGrid info={informativeSnippets} />
        </Col>
        {/* TODO Organization Card Grid */}
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#dff8d5' }}>
          <h3 className="p-2">Casos de Corrupción Relacionados</h3>
          <CorruptionCaseCardGrid info={corruptionCases} />
        </Col>
      </Row>
    );
  }
}

export default connect(state => ({
  // Related Actions Information
  organizations: state.openPage.organization.relatedOrganizations,
  individuals: state.openPage.individual.relatedIndividuals,
  corruptionCases: state.openPage.corruptionCase.relatedCorruptionCases,
  informativeSnippets: state.openPage.informativeSnippet.relatedInformativeSnippets,
}))(Relationships);
