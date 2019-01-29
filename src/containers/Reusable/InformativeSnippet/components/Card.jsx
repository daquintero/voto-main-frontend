// Generic InformativeSnippet Card
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardLink } from 'reactstrap';

const InformativeSnippetCard = info => (
  <div>
    <Card>
      <CardImg
        left
        width="100%"
        src={info.image}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{info.title}</CardTitle>
        <CardText>
          {info.date}
        </CardText>
        <CardLink className="text-left">
          <i className="fa fa-link" aria-hidden="true">
            {info.link}
          </i>
        </CardLink>
      </CardBody>
    </Card>
  </div>
);

InformativeSnippetCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};

InformativeSnippetCard.defaultProps = {
  info: {
    title: '',
    image: '',
    link: '',
    date: '',
  },
};

export default InformativeSnippetCard;
