/* eslint-disable */
// Top Banner
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';


// Components TODO ADD FORM
import Subscribe from '../../../Reusable/SocialShare/components/ConnectedSubscribe';


// TODO Amount of subscribers


class TopBanner extends PureComponent { // eslint-disable-line
  static propTypes = {
    light: PropTypes.bool.isRequired,
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

// TODO State Store Connection
export default TopBanner;
