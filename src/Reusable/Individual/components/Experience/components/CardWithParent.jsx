// Experience Card
// Libraries
import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Icon selector

import categoryInfo from '../../../../../shared/utils/categoryInfo';
import typeBanner from '../../../../typeBanner';

// Declaration
class ExpCard extends Component {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
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
      <Card className=" border-0 rounded-0 small-enlarge shadow" onClick={this.openMore}>
        <div className="bg-white p-1">
          <h6 className=" p-1 mb-0">{instance.title}</h6>
        </div>
        <CardHeader className="pt-1 pb-4 ">
          <p className="small text-black-50 m-0 p-1">
            <i
              className={`fal p-1 fa-${categoryInfo[instance.type] ? categoryInfo[instance.type].icon : 'building'}`}
            />
            {instance.organization}
          </p>
        </CardHeader>
        <CardBody className={`bg-light p-2 ${open && instance.briefDescription ? '' : 'd-none'}`}>
          <p className="p-1 m-0">{instance.briefDescription}</p>
          <div className="text-center"><i className="fal fa-user p-2" />{instance.individual}</div>
        </CardBody>
        {typeBanner('Experiencia')}
      </Card>
    );
  }
}

export default ExpCard;
