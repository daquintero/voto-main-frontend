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
  onClick = () => { // TODO REMOVE IF NOT NEEDED
    this.setState(prevState => ({ test: !prevState.test }));
  };
  toggleMoreInfo = (type) => { // TODO REMOVE IF NOT NEEDED
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

// ---- Common Usage Lines ----
// import { Container, Row, Col } from 'reactstrap';


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
