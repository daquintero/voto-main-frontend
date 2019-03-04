// Subcribe to Mailchimp /
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

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
    mailchimpSubscribed: PropTypes.number.isRequired,
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
  };

  handleSubmit = () => {
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
    const { status, mailchimpSubscribed } = this.props;
    const { name, email } = this.state;
    return (
      <Row noGutters>
        <Col xs={12} md={8} className="p-2 text-center m-md-0">
          <h5 className="p-2 m-0 notice">Compromėtete a un &nbsp;
            <span className="sl">#VotoInformado2019</span>
          </h5>
        </Col>
        <Col
          xs={12}
          md={4}
          className="p-2 my-auto text-center notice small-enlarge"
          onClick={this.handleSubmit}
        >
          <h5 className="py-1 m-0 text-center">
            {mailchimpSubscribed || 0} &nbsp;<i className={`fal px-2 ${iconBehavior[status] ?
            iconBehavior[status].icon :
            'fa-envelope'}`}
            />
          </h5>
          <h6 className="m-0">
            Subscríbete
          </h6>
        </Col>
        <Col xs={12}>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre
                </span>
              </div>
              <input
                name="nombre"
                value={name}
                onChange={this.handleNameChange}
                type="text"
                placeholder="Mi compa"
                className="form-control"
              />
            </div>
            <div className="text-danger text-center">{alphaNumeric(name)}</div>
          </div>
          <div className=" mb-3">
            <div className="input-group">
              <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping">@</span>
                </div>
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
            <div className="input-group-prepend">
              <div className="input-group-text">Options</div>
            </div>
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


const mapStateToProps = (state) => {
  const { mailchimpSubscribed } = state.home.subscribedStats;
  return {
    mailchimpSubscribed,
  };
};
export default connect(mapStateToProps)(Subscribe);
