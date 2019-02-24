// Generic Corruption Case Card
import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
// Routing for each card
import { Link } from 'react-router-dom';
// Numerical Formatting
import numeral from 'numeral';
// Date conversion
import moment from 'moment';
// Date language
import 'moment/locale/es';
// Layout Map
import layoutMap from '../styling/layoutMap';
// Configure moment settings
moment.locale('es');

class CorruptionCaseCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instance } = this.props;

    const statisticsItem = stats => (
      <div className="p-2 text-center justify-content-center" key={stats.id}>
        <i className={`fal p-2 enlarge fa-${stats.icon}`} aria-hidden="true" />
        <div className="justify-content-between">
          <p className="small m-0" >
            {/* Check if number or string */}
            {(typeof stats.data === 'number') ?
              numeral(stats.data).format('0a')
              : stats.data}
          </p>
          <p className="small m-0" > {stats.title} </p>
        </div>
      </div>
    );

    const imgFalseCard = instance => (
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
                {instance.statistics && instance.statistics[3] ?
                instance.statistics.slice(0, 3).map(stat => statisticsItem(stat))
                : instance.statistics.map(stat => statisticsItem(stat))}
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Actualizado { moment(instance.date).fromNow() } </p>
                </div>
              </div>
            </Col>
          </Row>
        </Link>
      </Card>
    );

    const imgTrueCard = instance => (
      <Card className="bg-light border-0 rounded-0 small-enlarge two-col">
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
                src={instance.images[0].image}
                alt="Something"
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
                {instance.statistics && instance.statistics[3] ?
                instance.statistics.slice(0, 3).map(stat => statisticsItem(stat))
                : instance.statistics.map(stat => statisticsItem(stat))}
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

    return (instance.images ? imgTrueCard(instance) : imgFalseCard(instance));
  }
}

export default CorruptionCaseCard;
