// Generic InformativeSnippet Card
import React, { PureComponent } from 'react';
import { Card, CardBody, CardLink, CardImg } from 'reactstrap';
import { CardPropTypes, CardDefaultPropTypes } from './CorruptionCasePropTypes';

class CorruptionCaseCard extends PureComponent {
  static propTypes = CardPropTypes;
  static defaultProps = CardDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (
      <Card className="bg-white">
        <CardImg
          width="100%"
          src={info.images[0].image}
          alt="Something"
        />
        <CardBody className="p-2">
          <h4 className="card-title">{info.title}</h4>
          <div className="d-flex justify-content-between">
            <CardLink className="p-2 text-center justify-content-center" href={info.statistics[0].link} >
              <i className={`fal p-2 fa-2x fa-${info.statistics[0].icon}`} aria-hidden="true" />
              <div className="justify-content-between">
                <div> {info.statistics[0].data} </div>
                <div> {info.statistics[0].title} </div>
              </div>
            </CardLink>
            {info.statistics[1] ? (
              <CardLink className="p-2 text-center justify-content-center" href={info.statistics[0].link} >
                <i className={`fal p-2 fa-2x fa-${info.statistics[1].icon}`} aria-hidden="true" />
                <div className="justify-content-between">
                  <div> {info.statistics[1].data} </div>
                  <div> {info.statistics[1].title} </div>
                </div>
              </CardLink>
            ) : null}
            {info.statistics[2] ? (
              <CardLink className="p-2 text-center justify-content-center" href={info.statistics[0].link} >
                <i className={`fal p-2 fa-2x fa-${info.statistics[2].icon}`} aria-hidden="true" />
                <div className="justify-content-between">
                  <div> {info.statistics[2].data} </div>
                  <div> {info.statistics[2].title} </div>
                </div>
              </CardLink>
            ) : null}
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default CorruptionCaseCard;
