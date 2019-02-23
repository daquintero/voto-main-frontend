// Libraries
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

// PropTypes
import { financeModalPropTypes, financeModalDefaultProps } from './FinanceItemPropTypes';

// TODO REMOVE TEST DATA
import { tableData } from '../../DEVELOPMENT-ONLY-Page/components/SampleDataFullPage';

// Related Components
import Table from '../../MatTable';

// TODO Get cool loader
class FinanceModal extends PureComponent {
  static propTypes = financeModalPropTypes;
  static defaultProps = financeModalDefaultProps;
  render() {
    const {
      toggle, isOpen, children, // TODO action, relatedFinanceItems,
    } = this.props;
    // TODO Add loading and error, finish modularizing Modal Function
    // const { loading } = action;
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog--success"
      >
        <h5>Información Financiera Detallada</h5>
        <Table field={tableData} />
        {children}
      </Modal>
    );
  }
}

export default FinanceModal;
// export default connect(
// // TODO FINISH
// )(FinanceModal);
