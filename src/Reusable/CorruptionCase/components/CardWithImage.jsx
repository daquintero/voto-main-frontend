// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Components
import StatisticsItem from './StatisticsItem';

// Styling
import layoutMap from '../styling/layoutMap';


const CardWithImage = ({ instance, light }) => {
  const primaryImage = instance.media.images[0];
  return (
    <Card className={`${light ? 'bg-layout' : 'bg-shady-layout'} border-0 rounded-0 small-enlarge span-6-cols shadow`}>
      <Row noGutters>
        <Link to={`/corrupcion-caso/${instance.id}`}>
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
            <CardBody className="p-2">
              <h4 className="card-title mb-0">{instance.title}</h4>
            </CardBody>
            <div className="d-flex justify-content-between bg-eb rounded-0">
              {/* If there are three or more statistics,
                only display limits of 3 or map less than that */}
              { instance.statistics && instance.statistics.slice(0, 3).map(statistic => (
                <StatisticsItem instance={statistic} />
              ))}
              <div className="p-2 mt-0 text-center">
                <i className="fal p-2 fa-calendar" />
                <p className="small m-0"> Actualizado { moment(instance.date).fromNow() } </p>
              </div>
            </div>
          </Col>
        </Link>
      </Row>
    </Card>
  );
};

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardWithImage;
