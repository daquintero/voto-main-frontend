// Card with Parent for the Promise
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';
// TODO Add the parent relationship
// Declaration
class PromWPCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instance } = this.props;
    return (
      <a target="_blank" rel="noreferrer noopener" href={instance.source}>
        <Card className="bg-light border-0 rounded-0 small-enlarge">
          {categoryInfo[instance.type] ? (
            <CardHeader className="pt-1 pb-1 ">
              <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
              <h5 className="float-right mb-0">{categoryInfo[instance.type].Spanish}</h5>
            </CardHeader>
          ) : null}
          <CardBody className="p-2">
            <p className="p-1 m-0">{instance.briefDescription}</p>
            <div className="text-center"><i className="fal fa-user p-2" />{instance.individual}</div>
          </CardBody>
        </Card>
      </a>
    );
  }
}

export default PromWPCard;
