// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Components
import CardStatistics from '../../Statistics/components/CardStatistics';

// Styling
import layoutMap from '../styling/layoutMap';
import typeBanner from '../../typeBanner';


const CardWithImage = ({ instance, light }) => {
  const primaryImage = instance.media.images[0];
  return (
    <div className={`span-4-cols shadow ${light ? 'bg-layout' : 'bg-shady-layout'}`}>
      <Card className="bg-light border-0 rounded-0 small-enlarge pb-4">
        <Link to={`/noticia/${instance.id}`}>
          <Row noGutters>
            <Col
              xs={layoutMap[instance.size].xs.inner.imgWrapper}
              sm={layoutMap[instance.size].sm.inner.imgWrapper}
              md={layoutMap[instance.size].md.inner.imgWrapper}
              lg={layoutMap[instance.size].lg.inner.imgWrapper}
              xl={layoutMap[instance.size].xl.inner.imgWrapper}
            >
              <img
                className="img-cover"
                src={primaryImage.url}
                alt=""
              />
            </Col>
            <Col
              xs={layoutMap[instance.size].xs.inner.contentWrapper}
              sm={layoutMap[instance.size].sm.inner.contentWrapper}
              md={layoutMap[instance.size].md.inner.contentWrapper}
              lg={layoutMap[instance.size].lg.inner.contentWrapper}
              xl={layoutMap[instance.size].xl.inner.contentWrapper}
            >
              <CardBody className="p-0">
                <h5 className="card-title mb-0 p-2">{instance.title}</h5>
                <div className="d-flex justify-content-center bg-eb">
                  <div className="p-2 text-center justify-content-center">
                    <CardStatistics statistics={instance.statistics} />
                  </div>
                  <div className="p-2 mt-0 text-center">
                    <i className="fal p-2 fa-calendar" />
                    <p className="small m-0"> Publicado {moment(instance.dateCreated).fromNow()} </p>
                  </div>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Link>
      </Card>
      {typeBanner('Noticia')}
    </div>
  );
};

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardWithImage;
