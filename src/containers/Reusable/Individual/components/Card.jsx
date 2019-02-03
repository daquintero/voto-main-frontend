// Generic Individual Card
import React, { PureComponent } from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import { CardPropTypes, CardDefaultPropTypes } from './IndividualPropTypes';

class IndividualCard extends PureComponent {
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
        </CardBody>
      </Card>
    );
  }
}

export default IndividualCard;
