// Subcribe to Mailchimp /
// Libraries
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'reactstrap';

const iconBehavior = {
  error: {
    icon: 'fa-envelope text-danger',
  },
  sending: {
    icon: 'fa-spin fa-envelope',
  },
  success: {
    icon: 'fa-envelope text-success send',
  },
};


// TODO Test
const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Solo carácteres alfanuméricos'
    : undefined);

const emailV = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email inválido'
    : undefined);

// Declaration
class Subscribe extends PureComponent {
  static propTypes = {
    status: PropTypes.string.isRequired,
    onValidated: PropTypes.func.isRequired,
    // mailchimpSubscribed: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      province: '',
      incomplete: false,
    };
  }

  handleNameChange = (event) => {
    event.persist();
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    event.persist();
    this.setState({ email: event.target.value });
  };

  handleProvinceChange = (event) => {
    event.persist();
    this.setState({ province: event.target.value });
  };

  handleIncomplete = () => {
    this.setState(() => ({ incomplete: true }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const fName = this.state.name ? this.state.name : '';
    const fEmail = this.state.email ? this.state.email : '';
    const fProv = this.state.province ? this.state.province : '';
    return (
      <>
        {alphaNumeric(fName) && emailV(fEmail) ? (
          this.props.onValidated({
            EMAIL: fEmail,
            FNAME: fName,
            PROV: fProv,
          })) : (this.handleIncomplete())}
      </>
    );
  };

  render() {
    // State
    const {
      name, email,
    } = this.state;

    // Props
    const {
      status,
    } = this.props;

    return (
      <Row noGutters>
        <Col xs={12}>
          <form className="home__subscribe__form">
            <div className="mb-3">
              <div className="input-group">
                <input
                  name="nombre"
                  value={name}
                  onChange={this.handleNameChange}
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                />
              </div>
              <div className="text-danger text-center">{alphaNumeric(name)}</div>
            </div>
            <div className=" mb-3">
              <div className="input-group">
                <div className="input-group flex-nowrap">
                  <input
                    value={email}
                    onChange={this.handleEmailChange}
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="text-danger text-center">{emailV(email)}</div>
            </div>
            <div className="input-group">
              <select
                className="custom-select"
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
            <Button onClick={this.handleSubmit}>
              <i className={`fal px-2 ${iconBehavior[status] ?
              iconBehavior[status].icon :
              'fa-envelope'}`}
              />
              Me comprometo a votar informado
            </Button>
          </form>
        </Col>
        {this.state.incomplete ? (
          <div
            className="p-2 text-center small text-danger"
          >
            Hubo un error. Trata denuevo o nos puedes escribir a votoinformado2019@gmail.com
          </div>
        ) : null}
      </Row>
    );
  }
}

export default Subscribe;
// const mapStateToProps = (state) => {
//   const { mailchimpSubscribed } = state.home.subscribedStats;
//   return {
//     mailchimpSubscribed,
//   };
// };
// export default connect(mapStateToProps)(Subscribe);
