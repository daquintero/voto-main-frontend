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
        <a className="sl" target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card
            className="small-enlarge bg-layout mx-auto justify-content-center text-center rounded-0 border-0"
          >
            <h5 className="m-1 font-weight-bold">
              <i className={`p-2 fal fa-${instance.icon}`} />
              { typeof instance.value === 'number' ? numeral(instance.value).format('0,0') : instance.value}
            </h5>
            <p className="mb-1 mt-0 p-1 small">{instance.name}</p>
          </Card>
        </a>
      </div>
    );
  }
}

export default StatisticBlock;
