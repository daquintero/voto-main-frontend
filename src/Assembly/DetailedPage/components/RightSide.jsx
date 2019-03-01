/* eslint-disable */
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
    // Router
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
      instance, url, laws, resources
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
        {/*{instance.corruptionRelatedFunds || instance.nonCorruptionRelatedFunds ? (*/}
          <Row noGutters className="p-2 justify-content-center">
            <MainFinancesNav
              corruptionRelatedFunds={instance.corruptionRelatedFunds}
              nonCorruptionRelatedFunds={instance.nonCorruptionRelatedFunds}
              parent={typeInfo[instance.modelLabel].singular}
              light={light}
            />
          </Row>
        {/*) : null}*/}
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
            relatedModelLabel="political.Resource"
            gridClass="variable-grid"
            instances={resources.instances}
            subsetNumber={resources.subsetNumber}
            light={light}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          {/* TODO FINish making it work */}
          <TwitterFeed user={instance.twitterUsername}/>
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { laws } = state.openPage.relatedInstances;
  const { resources } = state.openPage.parentInstance.media;
  return {
    laws,
    resources,
  };
};

export default connect(mapStateToProps)(RightSide);

