// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';

// Functions
import imageUrl from '../../../shared/utils/imageUrl';


const TutorialCard = ({ instance }) => (
  <div className="knowledge-base__tutorial-card__wrapper">
    {instance.media.images.length !== 0 && (
      <img
        className="knowledge-base__tutorial-card__img"
        src={imageUrl(instance.media.images[0].url)}
        alt=""
      />
    )}
    <h2 className="knowledge-base__tutorial-card__title">
      {instance.title}
    </h2>
    <p
      className="knowledge-base__tutorial-card__summary"
    >
      {instance.summary}
    </p>
  </div>
);

TutorialCard.propTypes = {
  instance: PropTypes.instanceOf(Object),
};

TutorialCard.defaultProps = {
  instance: {},
};

export default TutorialCard;
