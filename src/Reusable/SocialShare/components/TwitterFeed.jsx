// Twitter Feed Creator
// TODO MAKE WORK
// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Declaration
const TwitterFeed = ({ user }) => ( // TODO REMOVE IF NOT NEEDED
  <div className="tweet-container">
    <a className="twitter-timeline" href={`https://twitter.com/${user}?ref_src=twsrc%5Etfw`} >
      <h4 className="text-center">Twitter En Vivo</h4>
    </a>
  </div>
);

TwitterFeed.propTypes = {
  user: PropTypes.string.isRequired,
};

export default TwitterFeed;
