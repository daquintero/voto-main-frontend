// Top Banner
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';


// Components TODO ADD FORM
import MailchimpForm from '../Reusable/SocialShare/components/MailchimpForm';


// TODO Amount of subscribers


class TopBanner extends PureComponent { // eslint-disable-line
  static propTypes = {
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { light } = this.props;
    return (
      <div className={light ? 'bg-layout' : 'bg-shady-layout'}>
        <Container>
          <Row noGutters className="py-1">
            <Col sm={6} md={6} className="px-4 py-4 p-md-2 my-auto">
              <MailchimpForm />
            </Col>
            <Col className="text-center my-auto">
              <h3>
                <i className="fal fa-clock spin-clock" />{' '}
                {moment('2019-05-05').diff(moment(), 'days')}
              </h3>
              <p>Dias Hasta las Elecciones</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// TODO State Store Connection
export default TopBanner;
