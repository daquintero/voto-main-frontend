// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CardImg, Card, Col, Row } from 'reactstrap';

const profile = `${process.env.PUBLIC_URL}/img/user.svg`;
// TODO Finish image rounded-circle

class Header extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  hasSocials = instance => (
    instance.website
    || instance.instagramUsername
    || instance.twitterUsername
    || instance.twitterUsername
    || instance.facebookUsername
  );

  render() {
    const {
      instance,
    } = this.props;

    return (
      <Card className="page-header border-0">
        <Row noGutters className="bg-shady-layout">
          <Col md={5}>
            {/* TODO ADD ALT */}
            <CardImg
              className="rounded-circle h-100 p-2 img-cover"
              src={instance.media.images[0] ? instance.media.images[0].url : profile}
              alt="Error"
            />
          </Col>
          <Col md={7} className="align-content-center my-auto">
            <h4 className="pt-3 px-3 pb-1 text-center m-0">{instance.name}</h4>
            <p className="lead m-0 pb-3 text-center">{instance.alias}</p>
            <Row noGutters className="p-2 pb-4 justify-content-center align-items-baseline">
              {instance.facebookUsername && (
                <Col className="px-1 text-center">
                  <a target="_blank" rel="noreferrer noopener" href={instance.facebookUsername}>
                    <i className="fab fa-facebook-square fa-2x" />
                  </a>
                </Col>
              )}
              {instance.twitterUsername && (
                <Col className="px-1 text-center">
                  <a target="_blank" rel="noreferrer noopener" href={instance.twitterUsername}>
                    <i className="fab fa-twitter-square fa-2x" />
                  </a>
                </Col>
              )}
              {instance.instagramUsername && (
                <Col className="px-1 text-center">
                  <a target="_blank" rel="noreferrer sl noopener" href={instance.instagramUsername}>
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                </Col>
              )}
              {instance.website && (
                <Col className="px-1 text-center">
                  <a target="_blank" rel="noreferrer noopener" href={instance.website}>
                    <i className="fa fa-browser fa-2x" />
                  </a>
                </Col>
              )}
              {instance.email && (
                <Col className="px-1 text-center">
                  <a target="_blank" rel="noreferrer noopener" href={instance.email}>
                    <i className="fa fa-envelope-open fa-2x" />
                  </a>
                </Col>
              )}
              {!this.hasSocials(instance) && (
                <p className="m-0">
                  No tenemos las redes sociales de esta persona. ¿Te las sabes?
                  ¡Añádelas en&nbsp;
                  <a href="https∂://studio.votoinformado2019.com" className="sl text-danger">
                  VotoStudio
                  </a>!
                </p>
              )}
            </Row>
          </Col>
        </Row>
        <Row noGutters className="bg-white">
          <h6 className="px-4 text-muted py-2 lead">{instance.briefDescription}</h6>
        </Row>
      </Card>
    );
  }
}

export default Header;

