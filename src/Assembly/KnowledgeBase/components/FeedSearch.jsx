// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FeedSearch extends Component {
  static propTypes = {
    // Callbacks
    search: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      query: '',
    };
  }

  handleOnChange = ({ target: { name, value } }) => {
    const { timeout } = this.state;
    const { search } = this.props;
    if (timeout) {
      clearTimeout(timeout);
    }

    this.setState({
      timeout: setTimeout(() => {
        if (value.length) search(value);
      }, 500),
      [name]: value,
    });
  };

  render() {
    // State
    const {
      query,
    } = this.state;

    return (
      <input
        name="query"
        value={query}
        onChange={this.handleOnChange}
        type="text"
      />
    );
  }
}

export default FeedSearch;
