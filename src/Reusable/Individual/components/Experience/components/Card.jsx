// Experience Card
// Libraries
import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

// Prop Types
import { CardPropTypes } from './ExperiencePropTypes';

// Declaration
class ContCard extends Component {
  static propTypes = {     instance: PropTypes.instanceOf(Object).isRequired,   };
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
    const { instance } = this.props;
    const { open } = this.state;
    return (
      <Card className="bg-light border-0 rounded-0 small-enlarge" onClick={this.openMore}>
        <CardHeader className="pt-1 pb-1 ">
          <h6 className=" p-1 mb-0">{instance.title}</h6>
          <p className="small m-0 p-1"><i className="fa p-1 fa-building" />{instance.organization}</p>
        </CardHeader>
        <CardBody className={`p-2 ${open && instance.briefDescription ? '' : 'd-none'}`}>
          <p className="p-1 m-0">{instance.description}</p>
        </CardBody>
      </Card>
    );
  }
}

export default ContCard;
