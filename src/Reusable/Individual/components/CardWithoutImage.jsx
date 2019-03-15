// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import categoryInfo from '../../../shared/utils/categoryInfo';

const CardWithoutImage = ({ instance, light }) => (
  <Card
    className={`border-0 rounded-0 h-100 p-2 ${light ? 'bg-layout' : 'bg-shady-layout'}
     shadow small-enlarge span-3-cols`}
  >
    <Link to={`/individuo/${instance.id}`}>
      <Row noGutters className="h-100">
        <Col
          xs={12}
        >
          <CardBody className="p-2">
            <Row noGutters>
              <Col
                xs={12}
                className="text-center p-1"
              >
                <h3 className="card-title mb-0">{instance.name}</h3>
                <p className="font-italic my-0">{instance.alias}</p>
              </Col>
            </Row>
            {instance.campaigns && instance.campaigns[0] ? (
              instance.campaigns.map(campaign => (
                <Row noGutters className="py-1">
                  <Col>
                    <h6 className="mb-0 p-1">{categoryInfo[campaign.type].link}</h6>
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
  </Card>
);

CardWithoutImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardWithoutImage;
