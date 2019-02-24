// Generic Organization Card
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col } from 'reactstrap';
// Routing for each card
import { Link } from 'react-router-dom';

// Layout Map
import layoutMap from '../../../shared/utils/layoutMap';

class IndividualCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };


  render() {
    const { instance } = this.props;

    const imgFalseCard = instance => (
      <Card className="border-0 rounded-0 h-100 p-2 bg-light small-enlarge">
        <Row noGutters className="h-100">
          <Col
            xs={layoutMap[instance.size].xs.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
            sm={layoutMap[instance.size].sm.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
            md={layoutMap[instance.size].md.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
            lg={layoutMap[instance.size].lg.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
            xl={layoutMap[instance.size].xl.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
          >
            <CardBody className="p-2">
              <Row noGutters>
                <Col
                  xs={layoutMap[instance.size].xs.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
                  sm={layoutMap[instance.size].sm.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
                  md={layoutMap[instance.size].md.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
                  lg={layoutMap[instance.size].lg.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
                  xl={layoutMap[instance.size].xl.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
                  className="text-center p-1"
                >
                  <h4 className="card-title mb-0">{instance.name}</h4>
                  <p className="font-italic mt-0">{instance.alias}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
    const imgTrueCard = instance => (
      <Card className="border-0 bg-light rounded-0 small-enlarge">
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
              <Row noGutters>
                <Col xs={9} className="mb-2">
                  <h4 className="card-title mb-0 text-right">{instance.name}</h4>
                  <p className="text-right mt-0 font-italic">{instance.alias}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    return (
      <Link to={`/organizacion/${instance.id}`}>
        { instance.images ? imgTrueCard(instance) : imgFalseCard(instance) }
      </Link>
    );
  }
}

export default IndividualCard;
