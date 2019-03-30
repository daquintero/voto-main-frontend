// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  Modal,
} from 'reactstrap';


class LocationPickerModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,

    // Callbacks
    toggle: PropTypes.func.isRequired,
  };

  render() {
    // Props
    const {
      isOpen, toggle,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        size="lg"
      >
        <div className="modal__header">
          <button className="lnr lnr-cross modal__close-btn" onClick={toggle} />
          <h3 className="page-title">{}</h3>
          <h3 className="page-subhead subhead">
            {}
          </h3>
        </div>
        <div className="modal__body">
          {}
        </div>
        <ButtonToolbar className="modal__footer">
          <Button onClick={toggle}>{}</Button>
        </ButtonToolbar>
      </Modal>
    );
  }
}

export default LocationPickerModal;
