// Generic InformativeSnippet Card
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

class ISCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;

  render() {
    const { objIn } = this.props;

    const imgFalseCard = obj => (
      <Card className="bg-white border-0">
        <Row noGutters>
          <Col xs={12} sm={6}>
            <CardBody className="p-2">
              <h4 className="card-title mb-0">{obj.title}</h4>
              <div className="d-flex justify-content-between">
                <CardLink className="p-2 text-center justify-content-center" href={obj.statistics[0].link} >
                  <i className={`fal p-2 fa-${obj.statistics[0].icon}`} aria-hidden="true" />
                  <div className="justify-content-between">
                    <p className="small" > {numeral(obj.statistics[0].data).format('0a')}</p>
                    <p className="small m-0" > {obj.statistics[0].title} </p>
                  </div>
                </CardLink>
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Publicado { moment(obj.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    const imgTrueCard = obj => (
      <Card className="bg-white border-0">
        <Row noGutters>
          <Col xs={6} sm={5}>
            <img
              className="img-cover"
              src={obj.images[0].image}
              alt="Something"
            />
          </Col>
          <Col xs={8} sm={7}>
            <CardBody className="p-2">
              <h4 className="card-title mb-0">{obj.title}</h4>
              <div className="d-flex justify-content-between">
                <CardLink className="p-2 text-center justify-content-center" href={obj.statistics[0].link} >
                  <i className={`fal p-2 fa-${obj.statistics[0].icon}`} aria-hidden="true" />
                  <div className="justify-content-between">
                    <p className="small" > {numeral(obj.statistics[0].data).format('0a')}</p>
                    <p className="small m-0" > {obj.statistics[0].title} </p>
                  </div>
                </CardLink>
                <div className="p-2 mt-0 text-center">
                  <i className="fal p-2 fa-calendar" />
                  <p className="small m-0"> Publicado { moment(obj.date).fromNow() } </p>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    );

    return (
      <>
        { objIn.images && objIn.images[0] ? imgTrueCard(objIn) : imgFalseCard(objIn) }
      </>
    );
  }
}

export default ISCard;
