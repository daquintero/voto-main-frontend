// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Category Repository
import relTopCreator from '../../relTopCreator';
import typeBanner from '../../../../typeBanner';

// Declaration
class ContCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { instance, light } = this.props;
    return (
      <div
        className={`span-6-cols ${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge`}
        style={{ position: 'relative' }}
      >
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="border-0 rounded-0">
            <CardBody className="p-2 pb-4">
              <p className="p-1 m-0 small pb-2">{instance.briefDescription}</p>
            </CardBody>
          </Card>
        </a>
        {typeBanner('Controversia')}
      </div>
    );
  }
}

export default ContCard;
