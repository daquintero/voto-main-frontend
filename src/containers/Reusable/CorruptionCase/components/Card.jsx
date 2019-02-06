// Generic Corruption Case Card
import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
// Routing for each card
import { Link } from 'react-router-dom';
// Numerical Formatting
import numeral from 'numeral';
// Date conversion
import moment from 'moment';
// Date language
import 'moment/locale/es';
import { CardPropTypes, CardDefaultPropTypes } from './CorruptionCasePropTypes';
// Layout Map
import layoutMap from '../styling/layoutMap';
// Configure moment settings
moment.locale('es');

class CorruptionCaseCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;

  render() {
    const { objIn } = this.props;

    const statisticsItem = stats => (
      <div className="p-2 text-center justify-content-center" key={stats.id}>
        <i className={`fal p-2 fa-${stats.icon}`} aria-hidden="true" />
        <div className="justify-content-between">
          <p className="small" >
            {/* Check if number or string */}
            {(typeof stats.data === 'number') ?
              numeral(stats.data).format('0a')
              : stats.data}
          </p>
          <p className="small m-0" > {stats.title} </p>
        </div>
      </div>
    );

    const imgFalseCard = obj => (
      <Card className="bg-white border-0 h-100">
        <Row noGutters className="h-100">
          <Col
            xs={layoutMap[obj.size].xs.inner.imgWrapper}
            md={layoutMap[obj.size].md.inner.imgWrapper}
          >
            <CardBody className="p-2 justify-self-center h-100">
              <h4 className="card-title mb-0">{obj.title}</h4>
              <div className="d-flex justify-content-between">
                {/* If there are three or more statistics,
                only display limits of 3 or map less than that */}
                {obj.statistics && obj.statistics[3] ?
                  obj.statistics.slice(0, 3).map(stat => statisticsItem(stat))
                  : obj.statistics.map(stat => statisticsItem(stat))}
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Actualizado { moment(obj.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    const imgTrueCard = obj => (
      <Card className="bg-white border-0">
        <Row noGutters>
          <Col
            xs={layoutMap[obj.size].xs.inner.imgWrapper}
            sm={layoutMap[obj.size].sm.inner.imgWrapper}
            md={layoutMap[obj.size].md.inner.imgWrapper}
            lg={layoutMap[obj.size].lg.inner.imgWrapper}
            xl={layoutMap[obj.size].xl.inner.imgWrapper}
          >
            <img
              className="img-cover"
              src={obj.images[0].image}
              alt="Something"
            />
          </Col>
          <Col
            xs={layoutMap[obj.size].xs.inner.contentWrapper}
            sm={layoutMap[obj.size].sm.inner.contentWrapper}
            md={layoutMap[obj.size].md.inner.contentWrapper}
            lg={layoutMap[obj.size].lg.inner.contentWrapper}
            xl={layoutMap[obj.size].xl.inner.contentWrapper}
          >
            <CardBody className="p-2">
              <h4 className="card-title mb-0">{obj.title}</h4>
              <div className="d-flex justify-content-between">
                {/* If there are three or more statistics,
                only display limits of 3 or map less than that */}
                {obj.statistics && obj.statistics[3] ?
                  obj.statistics.slice(0, 3).map(stat => statisticsItem(stat))
                  : obj.statistics.map(stat => statisticsItem(stat))}
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Actualizado { moment(obj.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    return (
      <Link to={`/corrupcion-caso/${objIn.id}`}>
        { objIn.images ? imgTrueCard(objIn) : imgFalseCard(objIn) }
      </Link>
    );
  }
}

export default CorruptionCaseCard;
