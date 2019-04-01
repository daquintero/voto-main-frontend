// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Components
// TODO USE STATISTICS
// import CardStatistics from '../../Statistics/components/CardStatistics';

// Styling
// Shared Function
import typeBanner from '../../typeBanner';

const profile = `${process.env.PUBLIC_URL}/img/user.svg`;

const CardLong = ({ instance, light }) => {
  const primaryImage = instance.media.images[0];
  return (
    <Card
      className={`border-0 ${light ? 'bg-layout' : 'bg-shady-layout'} rounded-0 m-2 small-enlarge shadow`}
    >
      <Link to={`/individuo/${instance.id}`}>
        <Row noGutters>
          <Col
            xs={4}
            className=" mb-4"
          >
            <img
              className="img-full p-2"
              src={primaryImage ? primaryImage.url : profile}
              alt=""
            />
          </Col>
          <Col
            xs={8}
          >
            <CardBody className="p-2 pb-4">
              <Row noGutters>
                <Col xs={12} className="mb-2">
                  <h5 className="card-title mb-0 text-right">{instance.name}</h5>
                  <p className="text-right my-0 font-italic">{instance.alias}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
        {typeBanner('Individuo', '#fbffff')}
      </Link>
    </Card>
  );
};

CardLong.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardLong;
