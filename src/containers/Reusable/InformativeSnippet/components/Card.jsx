// Generic InformativeSnippet Card
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const InformativeSnippetCard = props => (
  <div>
    <Card>
      <CardImg
        left
        width="100%"
        src={props.image}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
          {props.date}
        </CardText>
      </CardBody>
    </Card>
  </div>
);

InformativeSnippetCard.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};

InformativeSnippetCard.defaultProps = {
  props: {
    title: '',
    image: '',
    link: '',
    date: '',
  },
};

export default InformativeSnippetCard;
