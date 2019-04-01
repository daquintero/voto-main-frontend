// Card with Parent for the Promise
import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import relTopCreator from '../../Individual/components/relTopCreator';

// Category Repository
import categoryInfo from '../../../shared/utils/categoryInfo';
import typeBanner from '../../typeBanner';


// Declaration
class AchievementCardWithParent extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool,
  };

  static defaultProps = {
    light: false,
  };

  render() {
    const { instance, light } = this.props;
    return (
      <div className={`${light ? 'bg-layout' : 'bg-shady-layout'} shadow span-4-cols p-rel`}>
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="bg-light border-0 rounded-0">
            <CardBody className="p-2 pb-4">
              {categoryInfo[instance.type] &&
              (<i className={`float-left fa p-2 fa-${categoryInfo[instance.type].icon}`} />)
              }
              <p className="p-1 m-0 small">{instance.title}</p>
            </CardBody>
          </Card>
        </a>
        {typeBanner('Logro')}
      </div>
    );
  }
}

export default AchievementCardWithParent;
