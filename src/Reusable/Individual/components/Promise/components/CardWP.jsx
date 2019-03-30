// Card with Parent for the Promise
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import relTopCreator from '../../relTopCreator';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';
import typeBanner from '../../../../typeBanner';


// Declaration
class PromWPCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { instance, light } = this.props;
    return (
      <div className={`${light ? 'bg-layout' : 'bg-shady-layout'} shadow span-4-cols p-rel`}>
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="bg-light border-0 rounded-0">
            <CardBody className="p-2">
              <p className="p-1 m-0 small">{instance.briefDescription}</p>
            </CardBody>
            {categoryInfo[instance.type] ? (
              <CardHeader className="pt-1 pb-4">
                <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
                <p className="float-right small mb-0 pb-2">{categoryInfo[instance.type].Spanish}</p>
              </CardHeader>
            ) : null}
          </Card>
        </a>
        {typeBanner('Promesa')}
      </div>
    );
  }
}

export default PromWPCard;
