// Right Side Section of the Detailed CorruptionCase
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes } from './PagePropTypes';

// Components
import MainFinancesNav from '../../../../Reusable/FinanceItem/components/MainFinancesNav';
import Statistics from './Statistics';
import Share from '../../../../Reusable/SocialShare/components/Card';

// Declaration
class RightSide extends PureComponent {
  static propTypes = headerPropTypes;
  render() {
    const { basic } = this.props;
    return (
      <>
        {/* TODO GIVE RELATIVE ROUTES */}
        <Share title={basic.title} description={basic.description} url="https://www.votoinformado2019.com" />
        {basic && basic.corruptionRelatedFunds ? (
            <>
              <h3 className="text-center mt-2">Fianzas</h3>
              <MainFinancesNav
                corruptionRelatedFunds={basic.corruptionRelatedFunds}
                nonCorruptionRelatedFunds={basic.nonCorruptionRelatedFunds}
              />
            </>
        ) : null}
        <h3 className="text-center mt-2">Estadística</h3>
        <Statistics />
      </>
    );
  }
}

export default connect(state => ({
  // Basic CorruptionCase information
  basic: state.openPage.basic,
}))(RightSide);

