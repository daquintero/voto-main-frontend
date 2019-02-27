// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, Col, Row } from 'reactstrap';
import { imageTest } from '../../../../Reusable/DEVELOPMENT-ONLY-Page/components/SampleDataFullPage';

// TODO Finish image rounded-circle

class Header extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <Card className="page-header h-100 border-0">
        <Row noGutters>
          <Col md={5}>
            <CardImg className="rounded h-100 p-2" src={imageTest} />
          </Col>
          <Col md={7}>
            <h3 className="pt-2 text-center m-0">{instance.name}</h3>
            <p className="lead m-0 text-center">{instance.alias}</p>
            <h6 className="px-4 text-muted py-2">{instance.briefDescription}</h6>
            <Row noGutters className="p-2 justify-content-center">
              <Col xs={2} className="px-3 text-center">
                <a href={instance.facebookUsername}>
                  <i className="fab fa-facebook-square fa-2x" />
                </a>
              </Col>
              <Col xs={2} className="px-3 text-center">
                <a href={instance.twitterUsername}>
                  <i className="fab fa-twitter-square fa-2x" />
                </a>
              </Col>
              <Col xs={2} className="px-3 text-center">
                <a href={instance.instagramUsername}>
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </Col>
              <Col xs={2} className="px-3 text-center">
                <a href={instance.website}>
                  <i className="fa fa-browser fa-2x" />
                </a>
              </Col>
              <Col xs={2} className="px-3 text-center">
                <a href={instance.email}>
                  <i className="fa fa-envelope-open fa-2x" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Header;

