// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import MainFinancesNav from '../../../../Reusable/FinanceItem/components/MainFinancesNav';
import Statistics from './Statistics';
import Share from '../../../../Reusable/SocialShare/components/Card';

// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <>
        {/* TODO GIVE RELATIVE ROUTES */}
        <Share title={instance.title} description={instance.description} url="https://www.votoinformado2019.com" />
        {instance.corruptionRelatedFunds && (
          <>
            <h3 className="text-center mt-2">Fianzas</h3>
            <MainFinancesNav
              corruptionRelatedFunds={instance.corruptionRelatedFunds}
              nonCorruptionRelatedFunds={instance.nonCorruptionRelatedFunds}
            />
          </>
        )}
        <h3 className="text-center mt-2">Estadística</h3>
        <Statistics statistics={instance.statistics} />
      </>
    );
  }
}

export default RightSide;
