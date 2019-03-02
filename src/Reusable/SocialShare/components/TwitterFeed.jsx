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
//
// { /* <iframe */ }
// { /* id="twitter-widget-0" */ }
// { /* scrolling="no" */ }
// { /* frameBorder="0" */ }
// { /* allowTransparency="true" */ }
// { /* allowFullScreen="true" */ }
// { /* className="twitter-timeline twitter-timeline-rendered" */ }
// { /* style={{ */ }
// { /* position: 'static', */ }
// { /* visibility: 'visible', */ }
// { /* display: 'inline-block', */ }
// { /* width: '100%', */ }
// { /* padding: 0, */ }
// { /* border: 'none', */ }
// { /* 'max-width': '100%', */ }
// { /* 'min-width': '180px', */ }
// { /* 'margin-top': 0, */ }
// { /* 'margin-bottom': 0, */ }
// { /* 'min-height': '200px', */ }
// { /* height: '6854.66px', */ }
// { /* }} */ }
// { /* data-widget-id={`profile:${user}`} */ }
// { /* title="Twitter Timeline" */ }
// { /* /> */ }
//
// //
// // <iframe id="twitter-widget-0" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"
// //         className="twitter-timeline twitter-timeline-rendered"
// //         style="position: static; visibility: visible; display: inline-block; width: 100%; padding: 0px;
// //         border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;
// //         height: 6854.66px;"
//         data-widget-id="profile:NitoCortizo" title="Twitter Timeline"></iframe>
