// Libraries
import React, { PureComponent } from 'react';

// PropTypes
import PropTypes from 'prop-types';



// TODO Get cool loader
class InfoModal extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,

  };

  static defaultProps = {
    children: null,
  };
  render() {
    const {
      toggle, isOpen, children, // TODO action,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="modal-dialog--success"
      >
        {children}
      </Modal>
    );
  }
}


export default InfoModal;
