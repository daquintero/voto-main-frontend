// Libraries
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

// PropTypes
import { financeModalPropTypes, financeModalDefaultProps } from './FinanceItemPropTypes';

// TODO ADD REDUX
// Redux Actions
// import { getRelatedFinanceItems } from '../redux/actions';

// TODO REMOVE TEST DATA
import { tableData } from '../../DEVELOPMENT-ONLY-Page/components/SampleDataFullPage';

// Related Components
// TODO Reconnect
//  TableHeader from '../../MatTable';
import Table from '../../MatTable';

// TODO Get cool loader
class FinanceModal extends PureComponent {
  static propTypes = financeModalPropTypes;
  static defaultProps = financeModalDefaultProps;

  // componentDidMount() {
  //   this.props.dispatch(getRelatedFinanceItems(this.props.subsetNumber, this.props.modelLabel, this.props.id));
  // }
  //
  // getMoreInfo() {
  //   this.props.dispatch(getRelatedFinanceItems(this.props.subsetNumber + 1, this.props.modelLabel, this.props.id));
  // }

  // TODO Maybe refactor so it takes the response of the server.

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
        <h5>Donaciones Detalladas</h5>
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
