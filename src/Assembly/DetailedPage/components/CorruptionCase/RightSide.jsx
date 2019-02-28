// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import MainFinancesNav from '../../../../Reusable/FinanceItem/components/MainFinancesNav';
import Statistics from '../Statistics';
import Share from '../../../../Reusable/SocialShare/components/Card';


// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    // Router
    url: PropTypes.string.isRequired,
  };

  render() {
    const {
      instance, url,
    } = this.props;

    return (
      <>
        <Share
          title={instance.title || instance.name}
          description={instance.briefDescription}
          url={`https://www.votoinformado2019.com${url}`}
        />
        {instance.corruptionRelatedFunds && (
            <>
              <h3 className="text-center mt-2">Fianzas</h3>
              <MainFinancesNav
                corruptionRelatedFunds={instance.corruptionRelatedFunds}
                nonCorruptionRelatedFunds={instance.nonCorruptionRelatedFunds}
              />
            </>
        )}
        <Statistics
          instances={instance.statistics}
          type="political.Statistic"
        />
      </>
    );
  }
}

export default RightSide;

