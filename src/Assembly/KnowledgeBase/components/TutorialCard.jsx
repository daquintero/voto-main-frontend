// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Row, Col } from 'reactstrap';

// Functions
import imageUrl from '../../../shared/utils/imageUrl';


const getDaysAgo = (dateCreated) => {
  const daysAgo = moment().diff(dateCreated, 'days');
  switch (daysAgo) {
    case 0:
      return 'Posted today';
    case 1:
      return 'Posted yesterday';
    default:
      return `Posted ${daysAgo} days ago`;
  }
};


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
    <Row className="knowledge-base__tutorial-card__text">
      <Col
        xs={8}
        sm={9}
        md={9}
        lg={12}
        xl={12}
      >
        <h2>
          {instance.title}
        </h2>
        <p>
          {instance.summary}
        </p>
      </Col>
      <Col>
        <small className="text-black-50">{getDaysAgo(instance.dateCreated)}</small>
      </Col>
    </Row>
  </Link>
);

TutorialCard.propTypes = {
  instance: PropTypes.instanceOf(Object),
};

TutorialCard.defaultProps = {
  instance: {},
};

export default TutorialCard;
