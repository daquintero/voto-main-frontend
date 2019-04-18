// Main Finance Nav displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { NavItem } from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';

// Props
import PropTypes from 'prop-types';

import NFCard from '../../../shared/components/404/Card';

// Components
import FinanceModal from './FinanceModal';

class MainFinancesNav extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Object).isRequired,
    relatedFunds: PropTypes.number.isRequired,
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
      relatedFunds,
      parent,
      light,
      instances,
    } = this.props;
    const { showModal } = this.state;
    return (
      <div className="justify-content-center">
        <h4 className="text-center mt-2">Donaciones</h4>
        {relatedFunds || instances[0] ? (
          <>
            <NavItem
              className="list-group-item small-enlarge m-2 rounded-0 border-0 w-100 sl"
              onClick={this.toggleModal}
            >
              <div>
                <h5>{numeral(relatedFunds).format('$ 0,0.00')}</h5>
              </div>
              <div>
<<<<<<< HEAD
                <h6>Desglose</h6>
=======
>>>>>>> staging
                <p className="small">Haz click para el desglose</p>
              </div>
            </NavItem>
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

const mapStateToProps = (state) => {
  const { instances } = state.openPage.relatedInstances.financialItems;
  return {
    instances,
  };
};

export default connect(mapStateToProps)(MainFinancesNav);
