// Experience Card
// Libraries
import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

// Prop Types
import { CardPropTypes } from './ControversyPropTypes';

// Declaration
class ContCard extends Component {
  static propTypes = CardPropTypes;
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openMore = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  render() {
    const { objIn } = this.props;
    const { open } = this.state;
    return (
      <Card className="bg-light border-0 rounded-0 small-enlarge" onClick={this.openMore}>
        <CardHeader className="pt-1 pb-1 ">
          <h6 className=" p-1 mb-0"><i className="fa p-1 fa-university" />{objIn.title}</h6>
          <p className="small">{objIn.organization}</p>
        </CardHeader>
        { open && objIn.description ? (
          <CardBody className="p-2">
            <p className="p-1 m-0">{objIn.description}</p>
          </CardBody>
        ) : null }
      </Card>
    );
  }
}

export default ContCard;
