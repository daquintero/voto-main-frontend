/* eslint-disable no-nested-ternary */
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
      <div className="h-100">
        {instance.source ? (
          <a className="sl" target="_blank" rel="noreferrer noopener" href={instance.source}>
            <Card
              className="small-enlarge mx-auto justify-content-center text-center p-1 w-100"
            >
              <h5 className="m-1 font-weight-bold">
                <i className={`p-2 fal fa-${instance.icon}`} />
                {typeof instance.value === 'number' ? (
                    instance.name === 'Asistencia' ? (numeral(instance.value * 100).format('0,0')) :
                      (numeral(instance.value).format('0,0'))) : instance.value}
              </h5>
              <p className="mb-1 mt-0 p-1 small">{instance.name}</p>
            </Card>
          </a>
        ) : (
          <Card
            className="small-enlarge mx-auto justify-content-center text-center p-1 w-100"
          >
            <h5 className="m-1 font-weight-bold">
              <i className={`p-2 fal fa-${instance.icon}`} />
              {instance.name === 'Asistencia' ? (numeral(instance.value * 100).format('0.0')) : instance.value}
            </h5>
            <p className="mb-1 mt-0 p-1 small">{instance.name}</p>
          </Card>
        )}
      </div>
    );
  }
}

export default StatisticBlock;
