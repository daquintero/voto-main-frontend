// Full Page for the Corruption Page Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Prop Types
import { PageProps, defaultPageProps } from './CorruptionCasePropTypes';
// Redux Actions
import { getRelatedCorruptionCases } from '../redux/actions';
import { getRelatedIndividuals } from '../../Individual/redux/actions';
import { getRelatedInformativeSnippets } from '../../InformativeSnippet/redux/actions';
import { getRelatedFinanceItems } from '../../FinanceItem/redux/actions';
import { getRelatedOrganizations } from '../../Organization/redux/actions';

class Page extends Component {
  static propTypes = PageProps;
  static defaultProps = defaultPageProps; // TODO Define defaults
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getRelatedCorruptionCases(0, 'corruption.corruptioncase', this.props.id));
    this.props.dispatch(getRelatedIndividuals(0, 'individuals.individual', this.props.id));
    this.props.dispatch(getRelatedInformativeSnippets(0, 'corruption.informativesnippet', this.props.id));
    this.props.dispatch(getRelatedFinanceItems(0, 'corruption.financeitem', this.props.id));
    this.props.dispatch(getRelatedOrganizations(0, 'individuals.organizations', this.props.id));
  }
  onClick = () => {
    this.setState(prevState => ({ test: !prevState.test }));
  };
  toggleMoreInfo = (type) => {
    if (type === this.state.active) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: type });
    }
  };
  render() {
    const {
      id,
      title,
      description,
      longDescription,
      videos,
      images,
      statistics,
      organizations,
      individuals,
      corruptionCases,
      informativeSnippets,
    } = this.props;
    return (
      <div>
        {console.log([
        id,
        title,
        description,
        longDescription,
        videos,
        images,
        statistics,
        organizations,
        individuals,
        corruptionCases,
        informativeSnippets,
      ])}
      </div>
    );
  }
}

export default connect(state => ({
  // Build Action information
  title: state.openPage.title,
  description: state.openPage.description,
  longDescription: state.openPage.longDescription,
  videos: state.openPage.videos,
  images: state.openPage.images,
  statistics: state.openPage.statistics,

  // Related Actions Information
  organizations: state.openPage.organization.relatedOrganizations,
  individuals: state.openPage.individual.relatedIndividuals,
  corruptionCases: state.openPage.corruptionCase.relatedCorruptionCases,
  informativeSnippets: state.openPage.informativeSnippet.relatedInformativeSnippets,
}))(Page);
