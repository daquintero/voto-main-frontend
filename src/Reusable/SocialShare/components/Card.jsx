// Generic Share Component using current url as props
// Libraries
import React, { PureComponent } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import { Row, Col } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
class ShareCard extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hasHeader: PropTypes.bool,
  };
  static defaultProps = {
    title: 'Voto Informado 2019',
    url: 'www.votoinformado2019.com',
    description: 'Debate, Infórmate, Vota.',
    hasHeader: true,
  };
  render() {
    const {
      url, title, description, hasHeader,
    } = this.props;

    return (
      <Row noGutters className="px-2">
        {/* TODO HAVE Horizontal Alignment */}
        {hasHeader && (
          <Col xs={12}>
            <h5 className="text-center pb-2">¡Compárte!</h5>
          </Col>
        )}
        <Col className="mx-2">
          <FacebookShareButton
            url={url}
            hashtag="#votoinformado2019"
            quote={`${title} - #VotoInformado2019`}
          >
            <FacebookIcon round size={40} />
          </FacebookShareButton>
        </Col>
        <Col className="mx-2">
          <TwitterShareButton
            title={title}
            hashtags={['#votoinformado2019']}
            url={url}
          >
            <TwitterIcon round size={40} />
          </TwitterShareButton>
        </Col>
        <Col className="mx-2">
          <WhatsappShareButton
            url={url}
            title={title}
          >
            <WhatsappIcon round size={40} />
          </WhatsappShareButton>
        </Col>
        <Col className="mx-2">
          <EmailShareButton
            subject={title}
            body={description}
            url={url}
          >
            <EmailIcon round size={40} />
          </EmailShareButton>
        </Col>
      </Row>
    );
  }
}

export default ShareCard;
