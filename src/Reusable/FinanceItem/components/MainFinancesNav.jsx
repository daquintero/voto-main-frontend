// Main Finance Nav displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { Nav, NavItem } from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';

// Props
import PropTypes from 'prop-types';

import NFCard from '../../../shared/components/404/Card';

// Components
import FinanceModal from './FinanceModal';

class MainFinancesNav extends PureComponent {
  static propTypes = {
    corruptionRelatedFunds: PropTypes.number.isRequired,
    nonCorruptionRelatedFunds: PropTypes.number.isRequired,
    parent: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const {
      corruptionRelatedFunds,
      nonCorruptionRelatedFunds,
      parent,
      light,
    } = this.props;
    const { showModal } = this.state;
    return (
      <div className="justify-content-center">
        <h4 className="text-center mt-2">Finanzas</h4>
        {corruptionRelatedFunds || nonCorruptionRelatedFunds ? (
          <>
            <Nav className="mx-auto">
              <NavItem
                className="list-right list-group-item m-2 rounded-0 border-0 w-100"
                onClick={this.toggleModal}
              >
                <div>
                  <h5>{numeral(nonCorruptionRelatedFunds + corruptionRelatedFunds).format('$ 0,0.00')}</h5>
                </div>
                <div>
                  <h6>Total de Dinero Manejado</h6>
                </div>
              </NavItem>
            </Nav>
            <FinanceModal isOpen={showModal} toggle={this.toggleModal} />
          </>
        ) : (
          <NFCard
            type="corruption.FinancialItem"
            parent={parent}
            light={light}
          />
        ) }
      </div>
    );
  }
}

export default connect()(MainFinancesNav);


// TODO Decide to remove or not
// { /* <Nav className="mx-auto"> */ }
// { /* <NavItem */ }
// { /* className="list-right list-group-item m-0 rounded-0 border-0 w-100" */ }
// { /* > */ }
// { /* <div> */ }
// { /* <h6 className="notice text-center m-0 p-1">$$$ Investiga y contribuye en VotoStudio!</h6> */ }
// { /* </div> */ }
// { /* <div> */ }
// { /* <h6 className="small text-center m-0"> */ }
// { /* Aquí tendremos todas las finanzas relacionadas a esta persona y las fuentes de esta información. */ }
// { /* </h6> */ }
// { /* </div> */ }
// { /* </NavItem> */ }
// { /* </Nav> */ }
