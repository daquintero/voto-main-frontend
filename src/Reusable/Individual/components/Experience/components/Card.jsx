// Experience Card
// Libraries
import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'html-react-parser';

// Icon selector

import categoryInfo from '../../../../../shared/utils/categoryInfo';

// Declaration
class ExpCard extends Component {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
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
    const { instance, light } = this.props;
    const { open } = this.state;
    return (
      <Card
        className={`border-0 rounded-0 small-enlarge w-100 ${light ? 'bg-layout' : 'bg-shady-layout'}`}
        onClick={this.openMore}
      >
        <CardHeader className={`pt-1 pb-1 border-0 ${light ? 'bg-layout' : 'bg-shady-layout'}`}>
          <h6 className=" p-1 mb-0">{instance.title}</h6>
          <p className="small m-0 p-1">
            <i className={`fa p-1 fa-${categoryInfo[instance.type].icon || 'building'}`} />
            {instance.organization}
          </p>
        </CardHeader>
        <div className={`bg-light w-100 p-2 ${open && instance.description ? '' : 'd-none'}`}>
          <p className="p-1 m-0">
            {ReactHtmlParser(instance.description)}
          </p>
        </div>
      </Card>
    );
  }
}

export default ExpCard;
