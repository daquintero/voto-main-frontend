// Generic InformativeSnippet Card
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

class InformativeSnippetCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instance } = this.props;

    const imgFalseCard = instance => (
      <Card className="bg-light border-0 rounded-0 small-enlarge mincontent">
        <Link to={`/noticia/${instance.id}`}>
          <Row noGutters className="h-100">
            <Col
              xs={layoutMap[obj.size].xs.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
              md={layoutMap[obj.size].md.inner.imgWrapper + layoutMap[obj.size].md.inner.contentWrapper}
            >
              <CardBody className="p-0 justify-self-center h-100">
                <h4 className="card-title mb-0 p-3">{obj.title}</h4>
                <div className="d-flex justify-content-between bg-eb">
                  <div className="p-2 text-center justify-content-center" >
                    <i className={`fal p-2 enlarge fa-${obj.statistics[0].icon}`} aria-hidden="true" />
                    <div className="justify-content-between">
                      <p className="small m-0" > {numeral(obj.statistics[0].data).format('0a')}</p>
                      <p className="small m-0" > {obj.statistics[0].title} </p>
                    </div>
                  </div>
                  <div className="p-2 mt-0 text-center">
                    <i className="fal p-2 fa-calendar" />
                    <p className="small m-0"> Publicado { moment(obj.date).fromNow() } </p>
                  </div>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Link>
      </Card>
    );

    const imgTrueCard = obj => (
      <Card className="bg-light border-0 rounded-0 small-enlarge mincontent">
        <Link to={`/noticia/${objIn.id}`}>
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
              <CardBody className="p-0">
                <h4 className="card-title mb-0 p-2">{obj.title}</h4>
                <div className="d-flex justify-content-between bg-eb">
                  <div className="p-2 text-center justify-content-center">
                    <i className={`fal p-2 fa-${obj.statistics[0].icon}`} aria-hidden="true" />
                    <div className="justify-content-between">
                      <p className="small m-0" >
                        {/* Check if number or string */}
                        {(typeof obj.statistics[0].data === 'number') ?
                        numeral(obj.statistics[0].data).format('0a')
                        : obj.statistics[0].data}
                      </p>
                      <p className="small m-0" > {obj.statistics[0].title} </p>
                    </div>
                  </div>
                  <div className="p-2 mt-0 text-center">
                    <i className="fal p-2 fa-calendar" />
                    <p className="small m-0"> Publicado { moment(obj.date).fromNow() } </p>
                  </div>
                </div>
              </CardBody>
            </Col>

          </Row>
        </Link>
      </Card>
    );

    return (
      objIn.images ? imgTrueCard(objIn) : imgFalseCard(objIn)
    );
  }
}

export default InformativeSnippetCard;
