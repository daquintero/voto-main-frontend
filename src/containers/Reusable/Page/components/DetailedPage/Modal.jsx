/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

// PropTypes
import { financeModalPropTypes, financeModalDefaultProps } from './FinanceItemPropTypes';

// Redux Actions
import { getRelatedFinanceItems } from '../redux/actions';

// Related Components
import Table from '../../../MatTable/components/MatTable';

// TODO REMOVE SAMPLE DATA
import { financialData } from '../SampleDataFullPage';

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
      toggle, isOpen, children, // TODO action,
    } = this.props;
    // TODO Add loading and error, finish modularizing Modal Function
    // const { loading } = action;
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog--success"
      >
        <>
          asdfasd
          <Table field={financialData} />
          {children}
        </>
      </Modal>
    );
  }
}


export default connect(
// TODO FINISH
)(FinanceModal);
