import React, { Component } from 'react';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => (window.scrollY > 400 ? this.setState({ hidden: false }) : this.setState({ hidden: true }));

  backToTop = () => window.scrollTo(0, 0);

  render() {
    const { hidden } = this.state;
    return (
      <div
        className={`back-to-top__wrapper ${!hidden ? 'visible' : ''}`}
        role="presentation"
        onClick={this.backToTop}
        onScroll={this.onScroll}
      >
        <i className="fal fa-fw fa-chevron-up back-to-top__btn" />
      </div>
    );
  }
}

export default BackToTop;
