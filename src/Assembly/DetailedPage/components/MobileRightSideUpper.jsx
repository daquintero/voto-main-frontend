// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row } from 'reactstrap';

// Components
import MainFinancesNav from '../../../Reusable/FinanceItem/components/MainFinancesNav';
import Statistics from './Statistics';
import GenericGridWrapper from '../../../Reusable/Grid/components/GenericWrapper';
// import TwitterFeed from '../../../Reusable/SocialShare/components/TwitterFeed';

// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,

    // Variable
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
      instance, resources,
    } = this.props;
    const { light } = this.state;

    return (
      <Row noGutters>
        {instance.statistics && instance.statistics[0] ? (
          <Row noGutters className="px-2 py-4 justify-content-center right-side__row">
            <Statistics
              instances={instance.statistics}
              parent={instance.modelLabel}
            />
          </Row>
        ) : null}
        <Row noGutters className="px-2 py-4 justify-content-center right-side__row">
          <MainFinancesNav
            relatedFunds={instance.relatedFunds}
            parent={instance.modelLabel}
            light={light}
          />
        </Row>
        <Row noGutters className="px-2 py-4 justify-content-center right-side__row">
          <GenericGridWrapper
            relatedModelLabel="media.Resource"
            gridClass="variable-grid"
            instances={resources}
            subsetNumber={0}
            typeContext="detailed"
            light={light}
          />
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

