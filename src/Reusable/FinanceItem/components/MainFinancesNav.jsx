// Main Finance Nav displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { Nav, NavItem } from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';

// Redux
import { getCorruptionFunds, getNonCorruptionFunds, getAllFunds } from '../redux/actions';

// Props
import { mainFinanceListPropTypes } from './FinanceItemPropTypes';

// Components
import FinanceModal from './FinanceModal';

class MainFinancesNav extends PureComponent {
  static propTypes = mainFinanceListPropTypes;
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  getCorruptionFunds = () => {
    this.props.dispatch(getCorruptionFunds({
      pid: this.props.id,
      ml: this.props.modelLabel,
    }));
    this.toggleModal();
  };
  getNonCorruptionFunds = () => {
    this.props.dispatch(getNonCorruptionFunds({
      pid: this.props.id,
      ml: this.props.modelLabel,
    }));
    this.toggleModal();
  };
  getAllFunds = () => {
    this.props.dispatch(getAllFunds({
      pid: this.props.id,
      ml: this.props.modelLabel,
    }));
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { corruptionRelatedFunds, nonCorruptionRelatedFunds } = this.props;
    const { showModal } = this.state;
    return (
      <>
        {corruptionRelatedFunds || nonCorruptionRelatedFunds ? (
          <>
            <Nav className="mx-auto">
              <NavItem
                className="list-right list-group-item m-2 rounded-0 border-0 w-100"
                onClick={this.getCorruptionFunds}
                role="button"
                onKeyPress={this.getCorruptionFunds}
              >
                <div>
                  <h5>{numeral(corruptionRelatedFunds).format('$ 0,0.00')}</h5>
                </div>
                <div>
                  <h6>Dinero Relacionado a Corrupción</h6>
                </div>
              </NavItem>
              <NavItem
                className="list-right list-group-item m-2 rounded-0 border-0 w-100"
                onClick={this.getNonCorruptionFunds}
                role="button"
                onKeyPress={this.getCorruptionFunds}
              >
                <div>
                  <h5>{numeral(nonCorruptionRelatedFunds).format('$ 0,0.00')}</h5>
                </div>
                <div>
                  <h6>Dinero No Relacionado a Corrupción</h6>
                </div>
              </NavItem>
              <NavItem
                className="list-right list-group-item m-2 rounded-0 border-0 w-100"
                onClick={this.getAllFunds}
                role="button"
                onKeyPress={this.getAllFunds}
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
        ) : null }
      </>
    );
  }
}

export default connect()(MainFinancesNav);
