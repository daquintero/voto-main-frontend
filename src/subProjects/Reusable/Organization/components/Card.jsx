// Generic Organization Card
import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
// Routing for each card
import { Link } from 'react-router-dom';
import { CardPropTypes, CardDefaultPropTypes } from './OrganizationPropTypes';
// Layout Map
import layoutMap from '../../../shared/utils/layoutMap';

class IndividualCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;

  render() {
    const { objIn } = this.props;

    const imgFalseCard = obj => (
      <Card className="border-0 rounded-0 h-100 p-2 bg-light small-enlarge">
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
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
    const imgTrueCard = obj => (
      <Card className="border-0 bg-light rounded-0 small-enlarge">
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
      <Link to={`/organizacion/${objIn.id}`}>
        { objIn.images ? imgTrueCard(objIn) : imgFalseCard(objIn) }
      </Link>
    );
  }
}

export default IndividualCard;
