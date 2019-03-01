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

// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    // Router
    url: PropTypes.string.isRequired,
    laws: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    const {
      instance, url, laws,
    } = this.props;

    return (
      <Row noGutters>
        <Row noGutters className="py-2">
          <Share
            title={instance.title || instance.name}
            description={instance.briefDescription}
            url={`https://www.votoinformado2019.com${url}`}
          />
        </Row>
        {instance.corruptionRelatedFunds && (
            <>
              <h3 className="text-center mt-2">Fianzas</h3>
              <MainFinancesNav
                corruptionRelatedFunds={instance.corruptionRelatedFunds}
                nonCorruptionRelatedFunds={instance.nonCorruptionRelatedFunds}
              />
            </>
        )}
        <Row noGutters className="p-2 justify-content-center">
          <Statistics
            instances={instance.statistics}
            parent={instance.modelLabel}
          />
        </Row>
        <Row noGutters className="p-2 justify-content-center">
          <LawList instances={laws} parent={typeInfo[instance.modelLabel].singular} />
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { laws } = state.openPage.relatedInstances;
  return {
    laws,
  };
};

export default connect(mapStateToProps)(RightSide);

