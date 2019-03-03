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
      <Card className="border-0">
        <Row noGutters className="">
          <Col
            md={5}
            xl={5}
          >
            <CardImg
              className="h-100 p-lg-4 img-cover"
              src={instance.media.images[0] ? instance.media.images[0].url : profile}
              alt="Error"
            />
          </Col>
          <Col md={7} className="align-content-center my-auto">
            <h4 className="pt-3 px-3 pb-1 text-left m-0">{instance.name}</h4>
            <p className="lead m-0 pb-3 px-3 text-left">{instance.alias}</p>
            <Row noGutters className="p-2 pb-4 justify-content-center align-items-baseline">
              {instance.facebookUsername && (
                <Col className="px-0 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://www.facebook.com/${instance.facebookUsername}`}
                  >
                    <i
                      className="fab fa-facebook-square fa-2x"
                      style={{ color: '#3B5998' }}
                    />
                  </a>
                </Col>
              )}
              {instance.twitterUsername && (
                <Col className="px-0 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://www.twitter.com/${instance.twitterUsername}`}
                  >
                    <i
                      className="fab fa-twitter-square fa-2x"
                      style={{ color: '#1DA1F2' }}
                    />
                  </a>
                </Col>
              )}
              {instance.instagramUsername && (
                <Col className="px-0 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://www.instagram.com/${instance.instagramUsername}`}
                  >
                    <i
                      className="fab fa-instagram fa-2x"
                      style={{ color: '#FB3958' }}
                    />
                  </a>
                </Col>
              )}
              {instance.website && (
                <Col className="px-0 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={instance.website}
                  >
                    <i
                      className="fa fa-browser fa-2x"
                      style={{ color: '#094074' }}
                    />
                  </a>
                </Col>
              )}
              {instance.email && (
                <Col className="px-0 text-center">
                  {/* TODO FIX email link */}
                  <a target="_blank" rel="noreferrer noopener" href={instance.email}>
                    <i
                      className="fa fa-envelope-open fa-2x"
                      style={{ color: '#5ADBFF' }}
                    />
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

