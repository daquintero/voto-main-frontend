// Search Component
import React, { PureComponent } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// Prop Types
import PropTypes from 'prop-types';

// Actions
import { homeSearch } from '../redux/actions';

// Components
import Generic from '../../../Reusable/Grid/components/DetailedReduxCardGrid';

// Validation
const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9áéíóú ]/i.test(value)
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
        <Container>
          <Row noGutters className="justify-content-center p-4">
            <div className="p-4 text-center">
              <h4>¡Infórmate e Investiga!</h4>
              <p>Descubre todas las controversias, promesas y perfiles políticos que hemos recopilado.</p>
            </div>
            <Col md={12} className="align-content-center justify-content-center px-4  mx-auto">
              <form className="home__search__form">
                <Field
                  name="query"
                  type="text"
                  component={renderField}
                  label="ej. Asamblea 080"
                  validate={alphaNumeric}
                  onChange={this.submitSearch}
                />
                <i className="fal fa-search" />
              </form>
            </Col>
            {search && (search.active || search.anyTouched) && (
            <Col xs={12} className="justify-content-center mx-auto py-2 mb-2">
              <Generic
                instances={instances}
                light
                gridClass="variable-new-grid"
                relatedModelLabel="noneType"
                typeContext="public"
              />
            </Col>
          )}

          </Row>
        </Container>
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

