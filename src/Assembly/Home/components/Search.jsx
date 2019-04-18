// Search Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Actions
import { suggest, search } from '../redux/actions';
import { SUGGEST, SEARCH, INCREMENT_SEARCH_PAGE } from '../redux/actionCreators';

// Components
import GenericGridWrapper from '../../../Reusable/Grid/components/GenericWrapper';
import DetailModal from '../../../Reusable/Grid/components/DetailModal';
import toggleDetailModal from '../../../shared/utils/toggleDetailModal';


class Search extends Component {
  static propTypes = {
    // Redux
    actions: PropTypes.instanceOf(Array).isRequired,
    options: PropTypes.instanceOf(Array).isRequired,
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
      selectedOption: null,
    };
  }

  cleanQuery = query => query.replace(/[|&;$%@"<>()+,]/g, '');

  handleSuggest = (query) => {
    const { dispatch } = this.props;

    if (query.length) {
      return dispatch(suggest({
        search: this.cleanQuery(query),
      }));
    }

    return null;
  };

  handleSearch = (query, page, increment = false) => {
    const { dispatch } = this.props;

    if (query.length) {
      return dispatch(search({
        search: this.cleanQuery(query),
        page,
      }))
        .then((action) => {
          if (action.type === SEARCH.SUCCESS) {
            dispatch({
              type: SUGGEST.INIT,
            });
          }

          if (increment) {
            dispatch({
              type: INCREMENT_SEARCH_PAGE,
            });
          }
        });
    }

    return null;
  };

  handleSearchIconOnClick = () => {
    const { query } = this.state;

    this.handleSearch(query, 0);
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnKeyUp = ({ key, target: { value } }) => {
    const { timeout, selectedOption } = this.state;
    const { dispatch, options } = this.props;

    if (!value) {
      dispatch({
        type: SUGGEST.INIT,
      });
    }

    if (key === 'Enter') {
      // If the enter key is pressed then perform
      // the search with the current term.
      this.handleSearch(value, 0);
    } else if (key === 'ArrowDown') {
      if (selectedOption === null) {
        this.setState(() => {
          const nextSelectedOption = 0;

          return {
            query: options[nextSelectedOption].text,
            selectedOption: nextSelectedOption,
          };
        });
      }
      if (selectedOption < options.length - 1 && selectedOption !== null) {
        this.setState(({ selectedOption: prevSelectedOption }) => {
          const nextSelectedOption = prevSelectedOption + 1;

          return {
            query: options[nextSelectedOption].text,
            selectedOption: nextSelectedOption,
          };
        });
      }
    } else if (key === 'ArrowUp') {
      if (selectedOption > 0) {
        this.setState(({ selectedOption: prevSelectedOption }) => {
          const nextSelectedOption = prevSelectedOption - 1;

          return {
            query: options[nextSelectedOption].text,
            selectedOption: nextSelectedOption,
          };
        });
      }
    } else {
      // If anything other than the enter key
      // is pressed get suggestions
      if (timeout) {
        clearTimeout(timeout);
      }

      this.setState({
        timeout: setTimeout(() => {
          this.handleSuggest(value);
        }, 100),
        selectedOption: null,
      });
    }
  };

  handleSuggestionOnClick = ({ currentTarget: { dataset } }) => {
    this.handleSearch(dataset.text, 0);

    this.setState({
      query: dataset.text,
    });
  };

  handleOnSubmit = (e) => {
    // Simply stop the default behaviour
    // if a user presses the enter key.
    e.preventDefault();
  };

  handleGetMore = () => {
    const { query } = this.state;
    const { currentPage } = this.props;

    this.handleSearch(query, currentPage + 1, true);
  };

  render() {
    // State
    const {
      query,
      selectedOption,
    } = this.state;

    // Props
    const {
      // Redux
      actions: { SEARCH: SEARCH_ACTION },
      options,
      instances,
      done,
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
            className="home__search__form__wrapper justify-content-center"
          >
            <i className="fal fa-vote-yea home__search__background-icon one" />
            <i className="fal fa-vote-nay home__search__background-icon two" />
            <h4>¡Infórmate e Investiga!</h4>
            <Col md={12} className="align-content-center justify-content-center px-4 mt-3 mx-auto">
              <form
                className="home__search__form"
                onSubmit={this.handleOnSubmit}
                autoComplete="off"
              >
                <input
                  name="query"
                  type="text"
                  placeholder="ej. Asamblea 080"
                  onChange={this.handleOnChange}
                  onKeyUp={this.handleOnKeyUp}
                  className={classNames('home__search__form__input', { 'has-options': options.length })}
                  value={query}
                />
                <i
                  className="fal fa-search"
                  role="presentation"
                  onClick={this.handleSearchIconOnClick}
                />
                {options.length > 0 && query.length > 0 && (
                  <div className="home__search__suggestions__wrapper">
                    {options
                      .slice(0, 10)
                      .map(({ text }, index) => (
                        <div
                          key={text}
                          className={classNames('home__search__suggestions__option', {
                            selected: selectedOption === index,
                          })}
                          role="presentation"
                          onClick={this.handleSuggestionOnClick}
                          data-text={text.toLowerCase()}
                        >
                          {selectedOption === null ? (
                            <>
                              <span>
                                {text.toLowerCase().slice(0, this.cleanQuery(query).length)}
                              </span>
                              <span className="font-weight-bold">
                                {text.toLowerCase().slice(this.cleanQuery(query).length)}
                              </span>
                            </>
                          ) : (
                            <span>{text.toLowerCase()}</span>
                          )}
                        </div>
                    ))}
                  </div>
                )}
              </form>
              <div className="mt-2 text-center">
                <p>Descubre todas las controversias, promesas y perfiles políticos que hemos recopilado.</p>
              </div>
            </Col>
          </Row>
          <div className="home__search__results__wrapper">
            <Container>
              {(SEARCH_ACTION.loaded || instances.length > 0) && (
                <Col xs={12} className="justify-content-center mx-auto pb-2 mb-0">
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
  const { actions } = state.home;
  const {
    options, instances, currentPage, done,
  } = state.home.search;
  const { openInstance, openInstanceModal } = state.reusable;

  return {
    // Home
    actions,

    // Search
    options,
    instances,
    currentPage,
    done,

    // Reusable
    openInstance,
    openInstanceModal,
  };
};

export default connect(mapStateToProps)(Search);

