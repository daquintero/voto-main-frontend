// Block Statistic

// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import numeral from 'numeral';

class StatisticBlock extends PureComponent {
  static propTypes = {
    statistic: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { statistic } = this.props;
    return (
      <div className="mincontent">
        <a target="_blank" rel="noreferrer noopener" href={statistic.source}>
          <Card className="small-enlarge bg-light mx-auto justify-content-center text-center rounded-0 border-0">
            <i className={`pt-2 fal fa-${statistic.icon}`} />
            <p className="m-1 font-weight-bold">
              { typeof statistic.value === 'number' ? numeral(statistic.value).format('0,0') : statistic.value}
            </p>
            <p className="mb-1 mt-0 p-1">{statistic.name}</p>
          </Card>
        </a>
      </div>
    );
  }
}

export default StatisticBlock;
