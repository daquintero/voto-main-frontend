// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row } from 'reactstrap';

// Components
import MainFinancesNav from '../../../Reusable/FinanceItem/components/MainFinancesNav';
import Statistics from './Statistics';
import Share from '../../../Reusable/SocialShare/components/Card';
import LawList from '../../../Reusable/Law/components/List';
import typeInfo from '../../../shared/utils/typeInfo';
import CardGrid from '../../../Reusable/Grid/components/Related/DetailedReduxCardGrid';
import TwitterFeed from '../../../Reusable/SocialShare/components/TwitterFeed';

// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,

    // Variable
    url: PropTypes.string.isRequired,
    laws: PropTypes.instanceOf(Array).isRequired,
    resources: PropTypes.instanceOf(Array).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      light: true,
    };
  }

  render() {
    const {
      instance, url, laws, resources, actions,
    } = this.props;
    const { light } = this.state;

    return (
      <Row noGutters>
        <Row noGutters className="py-2">
          <Share
            title={instance.title || instance.name}
            description={instance.briefDescription}
            url={`https://www.votoinformado2019.com${url}`}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          <MainFinancesNav
            corruptionRelatedFunds={instance.corruptionRelatedFunds}
            nonCorruptionRelatedFunds={instance.nonCorruptionRelatedFunds}
            parent={typeInfo[instance.modelLabel].singular}
            light={light}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          <Statistics
            instances={instance.statistics}
            parent={instance.modelLabel}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          <LawList
            instances={laws.instances}
            parent={typeInfo[instance.modelLabel].singular}
            light={light}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          <CardGrid
            relatedModelLabel="media.Resource"
            gridClass="variable-grid"
            instances={resources}
            subsetNumber={0}
            light={light}
          />
        </Row>
        {actions.GET_DETAILED_PAGE.loaded && instance.twitterUsername ? (
          <Row noGutters className="p-2 justify-content-center">
            {/* TODO FINish making it work */}
            <TwitterFeed user={instance.twitterUsername} />
          </Row>
        ) : null}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { actions } = state.openPage;
  const { laws } = state.openPage.relatedInstances;
  const { resources } = state.openPage.parentInstance.media;
  return {
    laws,
    resources,
    actions,
  };
};

export default connect(mapStateToProps)(RightSide);

