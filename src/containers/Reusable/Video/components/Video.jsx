// Video Component for Resizable Areas
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Video extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    embedUrlSrc: PropTypes.string,
  };
  static defaultProps = {
    title: '',
    embedUrlSrc: '',
  }
  render() {
    const { title, embedUrlSrc } = this.props;
    return (
      <div className="video">
        <iframe
          title={title}
          src={embedUrlSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
