// Main Finance Nav displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { Nav, NavItem } from 'reactstrap';
import numeral from 'numeral';

// Props
import { mainFinanceListPropTypes } from './FinanceItemPropTypes';


class MainFinancesNav extends PureComponent {
  static propTypes = mainFinanceListPropTypes;

  render() {
    const { corruptionRelatedFunds, nonCorruptionRelatedFunds } = this.props;
    return (
      <>
        {corruptionRelatedFunds || nonCorruptionRelatedFunds ? (
          <Nav className="mx-auto">
            <NavItem className="list-up list-group-item m-2 rounded-0 border-0 w-100">
              <div>
                <h4>{numeral(corruptionRelatedFunds).format('$ 0,0.00')}</h4>
              </div>
              <div>
                <h6>Dinero Relacionado a Corrupción</h6>
              </div>
            </NavItem>
            <NavItem className="list-up list-group-item m-2 rounded-0 border-0 w-100">
              <div>
                <h4>{numeral(nonCorruptionRelatedFunds).format('$ 0,0.00')}</h4>
              </div>
              <div>
                <h6>Dinero No Relacionado a Corrupción</h6>
              </div>
            </NavItem>
            <NavItem className="list-up list-group-item m-2 rounded-0 border-0 w-100">
              <div>
                <h4>{numeral(nonCorruptionRelatedFunds + corruptionRelatedFunds).format('$ 0,0.00')}</h4>
              </div>
              <div>
                <h6>Total de Dinero Manejado</h6>
              </div>
            </NavItem>
          </Nav>
        ) : null }
      </>
    );
  }
}

export default MainFinancesNav;
