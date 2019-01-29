import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Whatever extends Component {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
  }
  onClick = () => {
    this.setState(prevState => ({ test: !prevState.test }));
  };
  toggleMoreInfo = (type) => {
    if (type === this.state.active) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: type });
    }
  };
  render() {
    return (
      <div>{this.props.hi}</div>
    );
  }
}

export default Whatever;


// ---- Generic mounting test in enzyme ----
// import React from 'react';
// import renderer from 'react-test-renderer';
// import TopBar from '../components/index';
//
// it('TopBar renders correctly without crashing', () => {
//   const tree = renderer
//     .create(<TopBar />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
