// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Styling
import layoutMap from '../styling/layoutMap';

class CardWithoutImage extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instance } = this.props;
    const primaryStatistic = instance.statistics ? instance.statistics[0] : null;
    return (
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
                  {primaryStatistic ? (
                    <div className="p-2 text-center justify-content-center">
                      <i className={`fal p-2 enlarge fa-${primaryStatistic.icon}`} aria-hidden="true" />
                      <div className="justify-content-between">
                        <p className="small m-0"> {numeral(primaryStatistic.value).format('0a')}</p>
                        <p className="small m-0"> {primaryStatistic.title} </p>
                      </div>
                    </div>
                    ) : null}
                  <div className="p-2 mt-0 text-center">
                    <i className="fal p-2 fa-calendar" />
                    <p className="small m-0"> Publicado {moment(instance.date).fromNow()} </p>
                  </div>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Link>
      </Card>
    );
  }
}

export default CardWithoutImage;
