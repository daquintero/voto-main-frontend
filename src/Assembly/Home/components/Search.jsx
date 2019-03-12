// Search Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { homeSearch } from '../redux/actions';

// Components
import Generic from '../../../Reusable/Grid/components/DetailedReduxCardGrid';


class Search extends Component {
  static propTypes = {
    // Redux
    instances: PropTypes.arrayOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    search: PropTypes.instanceOf(Object),
  };

  static defaultProps = {
    search: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      query: '',
    };
  }

  validateQuery = value => ((value && /[^a-zA-Z0-9áéíóú ]/i.test(value))
    ? { message: 'Por favor solo caracteres alfanuméricos', valid: false }
    : { message: null, valid: true });

  handleSearch = (query) => {
    const { dispatch } = this.props;

    if (query.length && this.validateQuery(query).valid) {
      dispatch(homeSearch({
        search: query,
      }));
    }
  };

  handleOnKeyUp = ({ target: { name, value } }) => {
    const { timeout } = this.state;
    if (timeout) {
      clearTimeout(timeout);
    }

    this.setState({
      timeout: setTimeout(() => {
        this.handleSearch(value);
      }, 500),
      [name]: value,
    });
  };

  renderField = ({
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

  render() {
    // State
    const {
      query,
    } = this.state;

    // Props
    const {
      instances,
    } = this.props;

    return (
      <div className="home__search__wrapper">
        <Row
          noGutters
          className="home__search__form__wrapper justify-content-center bg-shady-layout"
        >
          <i className="fal fa-vote-yea home__search__background-icon one" />
          <i className="fal fa-vote-nay home__search__background-icon two" />
          <h4>¡Infórmate e Investiga!</h4>
          <Col md={12} className="align-content-center justify-content-center px-4 mt-3 mx-auto">
            <form className="home__search__form">
              <input
                name="query"
                type="text"
                placeholder="ej. Asamblea 080"
                onKeyUp={this.handleOnKeyUp}
              />
              <i className="fal fa-search" />
            </form>
            <div className="mt-2 text-danger text-center">
              <p>{this.validateQuery(query).message}</p>
            </div>
            <div className="mt-2 text-center">
              <p>Descubre todas las controversias, promesas y perfiles políticos que hemos recopilado.</p>
            </div>
          </Col>
        </Row>
        <div className="home__search__results__wrapper">
          {(query.length !== 0 && this.validateQuery(query).valid) && (
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
        </div>
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

