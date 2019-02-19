// Right Side Section of the Detailed Page
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import { headerPropTypes } from './PagePropTypes';

// Components
import MainFinancesNav from '../../../FinanceItem/components/MainFinancesNav';
import Statistics from './Statistics';

// Declaration
class RightSide extends PureComponent {
  static propTypes = headerPropTypes;
  render() {
    const { basic } = this.props;
    return (
      <>
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
  // Basic Page information
  basic: state.openPage.basic,
}))(RightSide);

