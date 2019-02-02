// Video Component for Resizable Areas
import React from 'react';
import PropTypes from 'prop-types';

const Video = info => (
  <div className="video">
    <iframe
      title={info.title}
      src={info.embedUrlSrc}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    embedUrlSrc: PropTypes.string.isRequired,
  }),
};

Video.defaultProps = {
  info: {
    title: '',
    embedUrlSrc: '',
  },
};

export default Video;
