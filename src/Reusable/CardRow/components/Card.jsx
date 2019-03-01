// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Functions
import imageUrl from '../../../shared/utils/imageUrl';


const Card = ({ instance, index }) => {
  const image = instance.media.images[0];
  const primary = index === 0;
  return (
    <Link to="/" className="card-row__card">
      <img
        src={imageUrl(image.url)}
        alt={image.title}
        className={classNames({ primary })}
      />
      <div className="card-row__card__info">
        {primary ? (
          <h3>{instance.title}</h3>
        ) : (
          <h4>{instance.title}</h4>
        )}
        <span className="card-row__card__time">{moment(instance.dateCreated).fromNow()}</span>
      </div>
    </Link>
  );
};

Card.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
