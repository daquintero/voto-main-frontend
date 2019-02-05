// Common InformativeSnippet Card
import React, { PureComponent } from 'react';
import { Card, CardBody, CardLink, Row, Col } from 'reactstrap';
// Numerical Formatting
import numeral from 'numeral';
// Date conversion
import moment from 'moment';
// Date language
import 'moment/locale/es';
import { CardPropTypes, CardDefaultPropTypes } from './InformativeSnippetPropTypes';

// Configure moment settings
moment.locale('es');

class CommonCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (
      <Card className="bg-white">
        <Row noGutters>
          <Col xs={12}>
            <img
              className="img-cover"
              src={info.images[0].image}
              alt="Something"
            />
          </Col>
          <Col xs={12}>
            <CardBody className="p-2">
              <h4 className="card-title mb-0">{info.title}</h4>
              <div className="d-flex justify-content-between">
                <CardLink className="p-2 text-center justify-content-center" href={info.statistics[0].link} >
                  <i className={`fal p-2 fa-${info.statistics[0].icon}`} aria-hidden="true" />
                  <div className="justify-content-between">
                    <p className="small" > {numeral(info.statistics[0].data).format('0a')}</p>
                    <p className="small m-0" > {info.statistics[0].title} </p>
                  </div>
                </CardLink>
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Publicado { moment(info.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CommonCard;
