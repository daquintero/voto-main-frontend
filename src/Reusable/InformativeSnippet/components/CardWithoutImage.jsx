// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Styling
import layoutMap from '../styling/layoutMap';


const CardWithImage = ({ instance }) => (
  <Card className="bg-light border-0 rounded-0 small-enlarge mincontent">
    <Link to={`/noticia/${instance.id}`}>
      <Row noGutters className="h-100">
        <Col
          xs={layoutMap[instance.size].xs.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
          md={layoutMap[instance.size].md.inner.imgWrapper + layoutMap[instance.size].md.inner.contentWrapper}
        >
          <CardBody className="p-0 justify-self-center h-100">
            <h4 className="card-title mb-0 p-3">{instance.title}</h4>
            <div className="d-flex justify-content-between bg-eb">
              <div className="p-2 text-center justify-content-center" >
                <i className={`fal p-2 enlarge fa-${instance.statistics[0].icon}`} aria-hidden="true" />
                <div className="justify-content-between">
                  <p className="small m-0" > {numeral(instance.statistics[0].data).format('0a')}</p>
                  <p className="small m-0" > {instance.statistics[0].title} </p>
                </div>
              </div>
              <div className="p-2 mt-0 text-center">
                <i className="fal p-2 fa-calendar" />
                <p className="small m-0"> Publicado { moment(instance.date).fromNow() } </p>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Link>
  </Card>
);

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default CardWithImage;
