// Search Component
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Prop Types
import PropTypes from 'prop-types';

// Actions
import { homeSearch } from '../redux/actions';

// Components
import Generic from '../../../Reusable/Grid/components/Generic';

const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;


// Validation
const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Por favor solo caracteres alfanuméricos'
    : undefined);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="mx-auto form-control"
      style={{ 'max-width': '500px' }}
    />
    {touched &&
      ((error && <div className="text-danger text-center">{error}</div>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

// Declaration
class Search extends PureComponent {
  static propTypes = {
    instances: PropTypes.arrayOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    search: PropTypes.instanceOf(Object).isRequired,
  };

  submitSearch = (e) => {
    const { dispatch, search } = this.props;
    if (search.syncErrors) {
      return null;
    } else if (search.values && search.values.query) {
      dispatch(homeSearch({
        search: e.target.value,
      }));
    }
    return null;
  };

  render() {
    const {
      instances, search,
    } = this.props;
    return (
      <div className="py-2 my-2 bg-shady-layout">
        <Row noGutters className="justify-content-center p-4">
          <Col md={12} className="text-center">
            <h4>¡Investiga!</h4>
          </Col>
          <Col md={12} className="align-content-center justify-content-center px-4 pb-4 mx-auto">
            <form>
              <Field
                name="query"
                type="text"
                component={renderField}
                label="Cualquier cosa"
                validate={alphaNumeric}
                onChange={this.submitSearch}
              />
            </form>
          </Col>
          {search && (search.active || search.anyTouched) && (
            <Col xs={12} className="justify-content-center mx-auto py-2 mb-2">
              <Generic
                instances={instances}
                light
                gridClass="variable-grid"
                relatedModelLabel="noneType"
              />
            </Col>
          )}
          <Col xs={12} className="py-4 mt-4 bg-layout justify-content-center text-center">
            <Row noGutters>
              <Col xs={12} md={6} className="p-2 my-auto">
                <img src={banner} alt="Error" />
              </Col>
              <Col xs={12} md={6} className="p-2">
                <h5> INFÓRMATE ● DEBATE ● VOTA</h5>
                <p className="lead text-center mb-1 mt-1 mx-1">
                  ¿Quieres contribuir?
                </p>
                <a href="https://studio.votoinformado2019.com" className="sl">
                  <p className="m-0 p-1 text-center">
                    <i className="fal fa-search px-2" /> Investiga y anota fuentes creíbles que encuentres.
                  </p>
                  <p className="m-0 p-1 text-center">
                    <i className="fal fa-sign-in-alt px-2" /> ¡Entra a VotoStudio tocándome y contribuye!
                  </p>
                  <p className="m-0 p-1 text-center">
                    <i className="fal fa-check-square px-2" /> Y lo verifícaremos contra el fake news.
                  </p>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { instances } = state.home.search;
  const { search } = state.form;

  return {
    instances,
    search,
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: 'search',
})(Search));

