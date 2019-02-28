// Block Statistic

// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import numeral from 'numeral';

class StatisticBlock extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instance } = this.props;
    return (
      <div className="mincontent">
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="small-enlarge bg-light mx-auto justify-content-center text-center rounded-0 border-0">
            <i className={`pt-2 fal fa-${instance.icon}`} />
            <p className="m-1 font-weight-bold">
              { typeof instance.value === 'number' ? numeral(instance.value).format('0,0') : instance.value}
            </p>
            <p className="mb-1 mt-0 p-1">{instance.name}</p>
          </Card>
        </a>
      </div>
    );
  }
}

export default StatisticBlock;
