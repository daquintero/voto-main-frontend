import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CustomForm extends PureComponent {
  static defaultProps = {
    status: '',
    message: '',
    onValidated: () => null,
  };

  static propTypes = {
    status: PropTypes.string,
    message: PropTypes.string,
    onValidated: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      province: '',
      incomplete: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
  }

  handleNameChange(event) {
    event.persist();
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    event.persist();
    this.setState({ email: event.target.value });
  }

  handleProvinceChange(event) {
    event.persist();
    this.setState({ province: event.target.value });
  }

  handleIncomplete = () => {
    this.setState(() => ({ incomplete: true }));
  }

  handleSubmit = () => {
    const fName = this.state.name ? this.state.name : '';
    const fEmail = this.state.email ? this.state.email : '';
    const fProv = this.state.province ? this.state.province : '';
    return (
      <>
        { fName && fEmail ? (
          this.props.onValidated({
            EMAIL: fEmail,
            FNAME: fName,
            PROV: fProv,
          })) : (this.handleIncomplete()) }
      </>
    );
  };
  render() {
    const { status, message } = this.props;
    return (
      <div className="form-component">
        {status === 'sending' &&
        <div
          className="status"
          style={{ background: 'orange' }}
        >
          Enviando...
        </div>}
        {this.state.incomplete ? (
          <div
            className="status"
            style={{ background: 'orange' }}
          >
            ¿Seguro que añadiste tu nombre y email?
          </div>
        ) : null}
        {status === 'error' && (
          <div
            className="status"
            style={{ background: 'red' }}
          >
            El siguiente error pasó: <br /> {message} <br />
            ¡Se saló el sistema, ups!.
          </div>
        )}
        {status === 'success' && (
          <div
            className="status"
            style={{ background: 'green' }}
          >
            Prepárate para informarte!
          </div>
        )}
        <input
          className="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          type="text"
          placeholder="Nombre Completo *"
        />
        <br />
        <input
          className="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          type="email"
          placeholder="Email *"
        />
        <div className="province">
          <select
            className="select-prov"
            value={this.state.province}
            onChange={this.handleProvinceChange}
          >
            <option value="Provincia">Provincia</option>
            <option value="Panamá">Panamá</option>
            <option value="Bocas Del Toro">Bocas Del Toro</option>
            <option value="Chiriquí">Chiriquí</option>
            <option value="Colón">Colón</option>
            <option value="Coclé">Coclé</option>
            <option value="Darién">Darién</option>
            <option value="Herrera">Herrera</option>
            <option value="Los Santos">Los Santos</option>
            <option value="Panamá Oeste">Panamá Oeste</option>
            <option value="Veraguas">Veraguas</option>
            <option value="Comarcas">Comarcas</option>
          </select>
        </div>
        <br />
        <button className="submit" onClick={this.handleSubmit}>
          Suscríbete
        </button>
      </div>
    );
  }
}
export default CustomForm;
