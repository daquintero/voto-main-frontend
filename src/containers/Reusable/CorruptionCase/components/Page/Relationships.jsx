import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux Actions
import { getRelatedCorruptionCases } from '../../redux/actions';
import { getRelatedIndividuals } from '../../../Individual/redux/actions';
import { getRelatedInformativeSnippets } from '../../../InformativeSnippet/redux/actions';
import { getRelatedFinanceItems } from '../../../FinanceItem/redux/actions';
import { getRelatedOrganizations } from '../../../Organization/redux/actions';

// Components
import IndividualCardGrid from '../../../Individual/components/CardGrid';
import CorruptionCaseCardGrid from '../CardGrid';
import InformativeCardGrid from '../../../InformativeSnippet/components/CardGrid';

// Prop Types
import { RelationshipProps } from '../CorruptionCasePropTypes';

// TODO Props validation
class Relationships extends Component {
  static propTypes = RelationshipProps;

  componentDidMount() {
    this.props.dispatch(getRelatedCorruptionCases(0, 'corruption.corruptioncase', this.props.id));
    this.props.dispatch(getRelatedIndividuals(0, 'individuals.individual', this.props.id));
    this.props.dispatch(getRelatedInformativeSnippets(0, 'corruption.informativesnippet', this.props.id));
    this.props.dispatch(getRelatedFinanceItems(0, 'corruption.financeitem', this.props.id));
    this.props.dispatch(getRelatedOrganizations(0, 'individuals.organizations', this.props.id));
  }
  render() {
    const { individuals, corruptionCases, informativeSnippets } = this.props;
    return (
      <div>
        <IndividualCardGrid info={individuals} />
        <InformativeCardGrid info={informativeSnippets} />
        {/* TODO Organization Card Grid */}
        <CorruptionCaseCardGrid info={corruptionCases} />
      </div>
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