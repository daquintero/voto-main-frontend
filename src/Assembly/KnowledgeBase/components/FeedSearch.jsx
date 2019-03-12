// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FeedSearch extends Component {
  static propTypes = {
    placeholder: PropTypes.string,

    // Callbacks
    search: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: '',
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

    // Props
    const {
      placeholder,
    } = this.props;

    return (
      <input
        name="query"
        value={query}
        onChange={this.handleOnChange}
        type="text"
        placeholder={placeholder}
      />
    );
  }
}

export default FeedSearch;
