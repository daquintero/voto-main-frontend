// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Components
// TODO USE STATISTICS
// import CardStatistics from '../../Statistics/components/CardStatistics';

// Styling
import layoutMap from '../styling/layoutMap';

// Shared Function
import getColDims from '../../../shared/utils/getColDims';

import typeBanner from '../../typeBanner';
import categoryInfo from '../../../shared/utils/categoryInfo';

const profile = `${process.env.PUBLIC_URL}/img/user.svg`;

const CardWithImage = ({ instance, light }) => {
  const primaryImage = instance.media.images[0];
  return (
    <Card
      className={`border-0 ${light ? 'bg-layout' : 'bg-shady-layout'} rounded-0 small-enlarge span-3-cols shadow`}
    >
      <Link to={`/individuo/${instance.id}`}>
        <Row noGutters>
          <Col
            {...getColDims(layoutMap, instance.size, 'outer', 'wrapper')}
          >
            <img
              className="img-full p-3"
              src={primaryImage ? primaryImage.url : profile}
              alt=""
            />
          </Col>
          <Col >
            <CardBody className="p-2 pb-4">
              <Row noGutters>
                <Col xs={12} className="mb-2">
                  <h5 className="card-title mb-0">{instance.name}</h5>
                  <p className="text-black-50 my-0 font-italic">{instance.alias}</p>
                </Col>
              </Row>
              {instance.campaigns && instance.campaigns[0] ? (
                instance.campaigns.map(campaign => (
                  <Row noGutters className="py-2">
                    <Col>
                      <h6 className="mb-0 p-1">{categoryInfo[campaign.type].t || campaign.type}</h6>
                      {campaign.reelection && (
                        <p className="mb-0">
                          <i className="fa p-1 fa-podium" />
                          Busca Reelección
                        </p>
                      )}
                    </Col>
                  </Row>
                ))
              ) : null}
            </CardBody>
          </Col>
        </Row>
      </Link>
      {typeBanner('Individuo', '#fbffff')}
    </Card>
  );
};

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardWithImage;
