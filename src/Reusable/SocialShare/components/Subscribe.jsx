// Subcribe to Mailchimp // overcompicated form yes?
// Libraries
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Prop Types
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined);

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);

// Declaration
class Subscribe extends PureComponent {
  static propTypes = {
    mailchimpSubscribed: PropTypes.number.isRequired,
    subscribed: PropTypes.instanceOf(Object).isRequired,
    status: PropTypes.string.isRequired,
    onValidated: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
  }
  registerSubmission = () => {
    const { onValidated, subscribed } = this.props;
    const { submit } = this.state;
    if (subscribed.syncErrors) {
      return null;
    } else if (
      subscribed.values
      && subscribed.values.email
      && subscribed.values.nombre
      && subscribed.values.provincia
      && submit
    ) {
      console.log('gotber');
      onValidated({
        EMAIL: subscribed.values.email,
        FNAME: subscribed.values.nombre,
        PROV: subscribed.values.provincia,
      });
      this.submit();
    }
    console.log('shit');
    return null;
  };
  submit = () => {
    this.setState(prevState => ({ submit: !prevState.submit }));
  };
  renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <div>{error}</div>) ||
        (warning && <div>{warning}</div>))}
    </>
  );
  render() {
    const { mailchimpSubscribed } = this.props;
    return (
      <Row noGutters>
        <Col xs={8} className="p-2">
          <h5 className="p-2 m-0 notice">Compromėtete a un &nbsp;
            <span className="sl">#VotoInformado2019</span>
          </h5>
        </Col>
        <Col xs={4} className="p-2 my-auto text-center notice small-enlarge" onClick={this.submit}>
          <h5 className="py-1 m-0 text-center">
            {mailchimpSubscribed || 0} &nbsp;<i className="fal px-2 fa-envelope send" />
          </h5>
          <h6 className="m-0">
            Subscríbete
          </h6>
        </Col>
        <Col xs={12} >
          <form onChange={this.registerSubmission}>
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre
                  </span>
                </div>
                <Field
                  name="nombre"
                  component={this.renderField}
                  type="text"
                  placeholder="Mi compa"
                  validate={alphaNumeric}
                />
              </div>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">@</span>
              </div>
              <Field
                name="email"
                component={this.renderField}
                type="email"
                validate={email}
                placeholder="Email"
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
  const { subscribed } = state.form;
  const { mailchimpSubscribed } = state.home.subscribedStats;
  return {
    subscribed,
    mailchimpSubscribed,
  };
};


export default connect(mapStateToProps)(reduxForm({
  form: 'subscribed',
})(Subscribe));
