// Generic Individual Card
import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
// Routing for each card
import { Link } from 'react-router-dom';
import { CardPropTypes, CardDefaultPropTypes } from './IndividualPropTypes';
// Numerical Formatting
// import numeral from 'numeral'; TODO FINISH
// Layout Map
import layoutMap from '../styling/layoutMap';

class IndividualCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;

  render() {
    const { objIn } = this.props;

    const imgFalseCard = obj => (
      <Card className="bg-white border-0 h-100 p-2">
        <Row noGutters className="h-100">
          <Col
            xs={layoutMap[obj.size].xs.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
            sm={layoutMap[obj.size].sm.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
            md={layoutMap[obj.size].md.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
            lg={layoutMap[obj.size].lg.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
            xl={layoutMap[obj.size].xl.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
          >
            <CardBody className="p-2">
              <Row noGutters>
                <Col
                  xs={layoutMap[obj.size].xs.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
                  sm={layoutMap[obj.size].sm.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
                  md={layoutMap[obj.size].md.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
                  lg={layoutMap[obj.size].lg.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
                  xl={layoutMap[obj.size].xl.inner.imgWrapper + layoutMap[obj.size].xs.inner.contentWrapper}
                  className="text-center p-1"
                >
                  <h4 className="card-title mb-0">{obj.name}</h4>
                  <p className="font-italic mt-0">{obj.alias}</p>
                  <Row noGutters className="emp-card-info-btm">
                    <Col xs={4}>
                      <i
                        className={`text-center fal ${obj.corruptionIndex && obj.corruptionIndex.change ?
                          'fa-caret-up text-success fa-2x' :
                          'fa-caret-down text-danger fa-2x'}`}
                      />
                      <p className="m-0 text-center">{obj.corruptionIndex.value}</p>
                      <p className="m-0 small">Indíce</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
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
              <Row noGutters>
                <Col xs={3} className="text-center p-1">
                  <i
                    className={`text-center fal ${obj.corruptionIndex && obj.corruptionIndex.change ?
                      'fa-caret-up text-success fa-2x' :
                      'fa-caret-down text-danger fa-2x'}`}
                  />
                  <p className="m-0 text-center">{obj.corruptionIndex.value}</p>
                  <p className="m-0 small">Indíce</p>
                </Col>
                <Col xs={9} className="mb-2">
                  <h4 className="card-title mb-0 text-right">{obj.name}</h4>
                  <p className="text-right mt-0 font-italic">{obj.alias}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    return (
      <Link to={`/individuo/${objIn.id}`}>
        { objIn.images ? imgTrueCard(objIn) : imgFalseCard(objIn) }
      </Link>
    );
  }
}

export default IndividualCard;
