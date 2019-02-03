// Generic InformativeSnippet Card
import React, { PureComponent } from 'react';
import { Card, CardBody, CardLink, CardImg, Row, Col } from 'reactstrap';
import moment from 'moment'; // Date conversion
import 'moment/locale/es'; // Date language
import { CardPropTypes, CardDefaultPropTypes } from './InformativeSnippetPropTypes';

// Configure moment settings
moment.locale('es');

class InformativeSnippetCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (
      <Card className="bg-white">
        <Row noGutters>
          <Col xs={4} sm={6}>
            <CardImg
              width="100%"
              src={info.images[0].image}
              alt="Something"
            />
          </Col>
          <Col xs={8} sm={6}>
            <CardBody className="p-2">
              <h4 className="card-title">{info.title}</h4>
              <div className="d-flex justify-content-between">
                <CardLink className="p-2 text-center justify-content-center" href={info.statistics[0].link} >
                  <i className={`fa p-2 fa-2x fa-${info.statistics[0].icon}`} aria-hidden="true" />
                  <div className="justify-content-between">
                    <div> {info.statistics[0].data} </div>
                    <div> {info.statistics[0].title} </div>
                  </div>
                </CardLink>
                <div className="p-2 mt-0 text-center">
                  <i className="fa p-2 fa-calendar fa-2x" />
                  <p> Publicado { moment(info.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default InformativeSnippetCard;
