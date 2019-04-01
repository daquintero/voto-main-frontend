// Search Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Actions
import { homeSearch } from '../redux/actions';
import { HOME_SEARCH, INCREMENT_HOME_SEARCH_PAGE } from '../redux/actionCreators';

// Components
import GenericGridWrapper from '../../../Reusable/Grid/components/GenericWrapper';
import DetailModal from '../../../Reusable/Grid/components/DetailModal';
import toggleDetailModal from '../../../shared/utils/toggleDetailModal';


class Search extends Component {
  static propTypes = {
    // Redux
    instances: PropTypes.arrayOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    openInstance: PropTypes.instanceOf(Object).isRequired,
    openInstanceModal: PropTypes.bool.isRequired,
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

  handleSearch = (query, page) => {
    const { dispatch } = this.props;

    if (query.length && this.validateQuery(query).valid) {
      return dispatch(homeSearch({
        search: query,
        page,
      }));
    }

    return null;
  };

  handleOnKeyUp = ({ target: { name, value } }) => {
    const { timeout } = this.state;
    const { dispatch } = this.props;
    if (timeout) {
      clearTimeout(timeout);
    }

    this.setState({
      timeout: setTimeout(() => {
        this.handleSearch(value, 0);
      }, 500),
      [name]: value,
    });

    dispatch({
      type: HOME_SEARCH.INIT,
    });
  };

  handleOnSubmit = (e) => {
    // Simply stop the default behaviour
    // if a user presses the enter key.
    e.preventDefault();
  };

  handleGetMore = () => {
    const { query } = this.state;
    const { currentPage, dispatch } = this.props;

    this.handleSearch(query, currentPage + 1)
      .then((action) => {
        if (action.type === HOME_SEARCH.SUCCESS) {
          dispatch({
            type: INCREMENT_HOME_SEARCH_PAGE,
          });
        }
      });
  };

  render() {
    // State
    const {
      query,
    } = this.state;

    // Props
    const {
      instances,
      done,

      // Redux
      openInstance,
      openInstanceModal,
      dispatch,
    } = this.props;

    return (
      <>
        {/* Instance Detail Modal */}
        <DetailModal
          instance={openInstance}
          isOpen={openInstanceModal}

          // Callbacks
          toggle={toggleDetailModal(dispatch)}
        />

        <div className="home__search__wrapper">
          <Row
            noGutters
            className="home__search__form__wrapper justify-content-center bg-shady-layout"
          >
            <i className="fal fa-vote-yea home__search__background-icon one" />
            <i className="fal fa-vote-nay home__search__background-icon two" />
            <h4>¡Infórmate e Investiga!</h4>
            <Col md={12} className="align-content-center justify-content-center px-4 mt-3 mx-auto">
              <form className="home__search__form" onSubmit={this.handleOnSubmit}>
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
            <Container>
              {(query.length !== 0 && this.validateQuery(query).valid) && (
                <Col xs={12} className="justify-content-center mx-auto py-2 mb-0 mb-lg-2">
                  <GenericGridWrapper
                    instances={instances}
                    light
                    gridClass="variable-new-grid"
                    relatedModelLabel="noneType"
                    typeContext="public"
                    getMore={this.handleGetMore}
                    getMoreEnabled={!done}
                    location="search"
                  />
                </Col>
              )}
            </Container>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { instances, currentPage, done } = state.home.search;
  const { openInstance, openInstanceModal } = state.reusable;

  return {
    // Search
    instances,
    currentPage,
    done,

    // Reusable
    openInstance,
    openInstanceModal,
  };
};

export default connect(mapStateToProps)(Search);

