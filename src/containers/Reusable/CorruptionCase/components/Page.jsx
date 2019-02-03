// Full Page for the Corruption Page Component
import React, { Component } from 'react';
import { PageProps } from './CorruptionCasePropTypes';

class Page extends Component {
  static propTypes = PageProps;
  static defaultProps = {
    info: {
      title: '',
      description: '',
      long_description: '',
      images: [],
      image: '',
      link: '',
      date: '',
    },
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

export default Page;
