// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  Modal,
} from 'reactstrap';


class DetailModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    instance: PropTypes.instanceOf(Object).isRequired,

    // Callbacks
    toggle: PropTypes.func.isRequired,
  };

  render() {
    // Props
    const {
      isOpen, toggle, instance,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        size="lg"
        centered
        className="modal-dialog--success"
      >
        <div className="modal__header">
          <button className="fal fa-times modal__close-btn" onClick={toggle} />
          <h3 className="page-title">{}</h3>
          <h3 className="page-subhead subhead">
            {instance.title}
          </h3>
        </div>
        <div className="modal__body">
          {instance.briefDescription}
          {instance.source && (
          <p className="m-0 p-2 text-center lead" >
            <a target="_blank" rel="noreferrer noopener" href={instance.source} className="sl">
                  Ver Fuente <i className="fal fa-external-link p-2" />
            </a>
          </p>
          )}
        </div>
        <ButtonToolbar className="modal__footer">
          <Button onClick={toggle}>Cerrar</Button>
        </ButtonToolbar>
      </Modal>
    );
  }
}

export default DetailModal;
