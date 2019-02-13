// Libraries
import React, { PureComponent } from 'react';
import { Modal } from 'reactstrap';

// PropTypes
import PropTypes from 'prop-types';

// TODO Get cool loader
class InfoModal extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    action: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
    }),
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    children: null,
    action: {
      loading: false,
      loaded: false,
      error: false,
    },
  };
  render() {
    const {
      toggle, isOpen, action, children,
    } = this.props;
    // TODO Add loading and error, finish modularizing Modal Function
    const { loading } = action;
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog--success"
      >
        { loading ? (<>fghdfg</>) : ({ children }) }
      </Modal>
    );
  }
}


export default InfoModal;
