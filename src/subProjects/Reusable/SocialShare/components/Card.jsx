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
  };
  static defaultProps = {
    title: 'Voto Informado 2019',
    url: 'www.votoinformado2019.com',
    description: 'Debate, Infórmate, Vota.',
  };
  render() {
    const { url, title, description } = this.props;
    return (
      <Row noGutters className="px-4">
        {/* TODO HAVE Horizontal Alignment */}
        <Col xs={12}>
          <h5>¡Compárte!</h5>
        </Col>
        <Col>
          <FacebookShareButton
            url={url}
            hashtag="#votoinformado2019"
            quote={`${title} - #VotoInformado2019`}
          >
            <FacebookIcon round size={40} />
          </FacebookShareButton>
        </Col>
        <Col>
          <TwitterShareButton
            title={title}
            hashtags={['#votoinformado2019']}
            url={url}
          >
            <TwitterIcon round size={40} />
          </TwitterShareButton>
        </Col>
        <Col>
          <WhatsappShareButton
            url={url}
            title={title}
          >
            <WhatsappIcon round size={40} />
          </WhatsappShareButton>
        </Col>
        <Col>
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
