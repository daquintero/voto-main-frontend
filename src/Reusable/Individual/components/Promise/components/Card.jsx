// Promise Card
// Libraries
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Declaration
class PromCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { instance, light } = this.props;
    return (
      <div className={`${light ? 'bg-layout' : 'bg-shady-layout'} span-5-rows`}>
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className={`${light ? 'bg-layout' : 'bg-shady-layout'} border-0 rounded-0 small-enlarge`}>
            <CardHeader className="pt-1 pb-1 border-0 ">
              <h5 className="float-right mb-0">{instance.title}</h5>
            </CardHeader>
            <CardBody className="p-2 flex-fill">
              <p className="p-1 m-0">{instance.longDescription}</p>
            </CardBody>
          </Card>
        </a>
      </div>
    );
  }
}

export default PromCard;
