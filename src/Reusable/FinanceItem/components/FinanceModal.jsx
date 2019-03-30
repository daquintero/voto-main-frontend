// Finance Modal
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import Table from '../../MatTable';

// Declaration
class FinanceModal extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Array).isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };
  render() {
    const { instances, toggle, isOpen } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog--success"
      >
        <h5>Donaciones Detalladas</h5>
        <Table instances={instances} />
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { instances } = state.openPage.relatedInstances.financialItems;
  return {
    instances,
  };
};

export default connect(mapStateToProps)(FinanceModal);
