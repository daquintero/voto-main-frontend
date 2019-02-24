// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';

// Declaration
class ContCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instance } = this.props;
    return (
      <a href={instance.source}>
        <Card className="bg-light border-0 rounded-0 small-enlarge">
          {categoryInfo[instance.type] ? (
            <CardHeader className="pt-1 pb-1 ">
              <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
              <h5 className="float-right mb-0">{categoryInfo[instance.type].Spanish}</h5>
            </CardHeader>
          ) : null}
          <CardBody className="p-2">
            <p className="p-1 m-0">{instance.description}</p>
          </CardBody>
        </Card>
      </a>
    );
  }
}

export default ContCard;