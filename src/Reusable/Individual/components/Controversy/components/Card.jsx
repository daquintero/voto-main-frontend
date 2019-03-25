// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';

// Declaration
class ContCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { instance, light } = this.props;
    return (
      <div className={`${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge`}>
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="border-0 rounded-0">
            {categoryInfo[instance.type] ? (
              <CardHeader className="pt-1 pb-1 ">
                <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
                <p className="small float-right mb-0">{categoryInfo[instance.type].Spanish}</p>
              </CardHeader>
          ) : null}
            <CardBody className="p-2">
              <p className="p-1 m-0">{instance.briefDescription}</p>
            </CardBody>
          </Card>
        </a>
      </div>
    );
  }
}

export default ContCard;
