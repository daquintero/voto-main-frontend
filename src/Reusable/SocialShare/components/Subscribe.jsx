// Subcribe to Mailchimp
// Libraries
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

// Prop Types
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';


// Declaration
class Subscribe extends PureComponent {
  static propTypes = {
    mailchimpSubscribed: PropTypes.number.isRequired,
  };
  submit = () => null;
  render() {
    const { mailchimpSubscribed } = this.props;
    return (
      <Row noGutters>
        <Col xs={4} className="p-2 my-auto text-center notice small-enlarge">
          <h5 className="py-1 m-0 text-center">
            {mailchimpSubscribed || 0} &nbsp;<i className="fal px-2 fa-envelope send" />
          </h5>
          <h6 className="m-0">
            Subcritos
          </h6>
        </Col>
        <Col xs={8} className="p-2">
          <h5 className="p-2 m-0 notice">Compromėtete a un &nbsp;
            <span className="sl">#VotoInformado2019</span>
          </h5>
        </Col>
        <Col xs={12} >
          <form onSubmit={this.submit}>
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre
                  </span>
                </div>
                <Field
                  name="nombre"
                  component="input"
                  type="text"
                  placeholder="Mi compa"
                  className="form-control"
                />
              </div>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">@</span>
              </div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <div className="input-group-text">Options</div>
              </div>
              <Field className="custom-select" name="provincia" component="select">
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
              </Field>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}


const mapStateToProps = (state) => {
  const { mailchimpSubscribed } = state.home.subscribed;
  return {
    mailchimpSubscribed,
  };
};


export default connect(mapStateToProps)(reduxForm({
  form: 'subscribe',
})(Subscribe));
