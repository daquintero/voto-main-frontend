// Experience Card
// Libraries
import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

// Prop Types
import { CardPropTypes } from './ExperiencePropTypes';

// Declaration
class ContCard extends Component {
  static propTypes = PropTypes.instanceOf(Object).isRequired;
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
          <h6 className=" p-1 mb-0">{objIn.title}</h6>
          <p className="small m-0 p-1"><i className="fa p-1 fa-building" />{objIn.organization}</p>
        </CardHeader>
        <CardBody className={`p-2 ${open && objIn.description ? '' : 'd-none'}`}>
          <p className="p-1 m-0">{objIn.description}</p>
        </CardBody>
      </Card>
    );
  }
}

export default ContCard;
