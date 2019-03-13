// Top Banner
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';


// Components TODO ADD FORM
import Subscribe from '../../../Reusable/SocialShare/components/ConnectedSubscribe';


// TODO Amount of subscribers
class TopBanner extends PureComponent { // eslint-disable-line
  static propTypes = {
    light: PropTypes.bool,
  };

  static defaultProps = {
    light: false,
  };

  render() {
    const { light } = this.props;
    return (
      <div className={light ? 'bg-layout' : 'bg-shady-layout'}>
        <Row noGutters className="pb-3">
          <Col md={12} className="px-4">
            <Subscribe />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopBanner;
