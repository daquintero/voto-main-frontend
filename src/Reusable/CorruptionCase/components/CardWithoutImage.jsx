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


const CardWithImage = ({ instance }) => (
  <Card className="bg-light border-0 rounded-0 small-enlarge mincontent">
    <Link to={`/corrupcion-caso/${instance.id}`}>
      <Row noGutters className="h-100">
        <Col
          xs={layoutMap[instance.size].xs.inner.imgWrapper}
          md={layoutMap[instance.size].md.inner.imgWrapper}
        >
          <CardBody className="p-2 justify-self-center">
            <h4 className="card-title mb-0">{instance.title}</h4>
          </CardBody>
          <div className="d-flex justify-content-between bg-eb">
            {/* If there are three or more statistics,
              only display limits of 3 or map less than that */}
            {instance.statistics.slice(0, 3).map(statistic => (
              <StatisticsItem instance={statistic} />
            ))}
            <div className="p-2 mt-0 text-center">
              <i className="fal p-2 fa-calendar" />
              <p className="small m-0"> Actualizado {moment(instance.date).fromNow()} </p>
            </div>
          </div>
        </Col>
      </Row>
    </Link>
  </Card>
);

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default CardWithImage;
