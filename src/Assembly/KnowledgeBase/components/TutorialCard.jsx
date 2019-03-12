// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Functions
import imageUrl from '../../../shared/utils/imageUrl';


const TutorialCard = ({ instance }) => (
  <Link
    to={`/conocimiento/tutorial/${instance.id}/`}
    className="knowledge-base__tutorial-card__wrapper"
  >
    {instance.media.images.length !== 0 && (
      <img
        className="knowledge-base__tutorial-card__img"
        src={imageUrl(instance.media.images[0].url)}
        alt=""
      />
    )}
    <div className="knowledge-base__tutorial-card__text">
      <h2>
        {instance.title}
      </h2>
      <p>
        {instance.summary}
      </p>
    </div>
  </Link>
);

TutorialCard.propTypes = {
  instance: PropTypes.instanceOf(Object),
};

TutorialCard.defaultProps = {
  instance: {},
};

export default TutorialCard;
