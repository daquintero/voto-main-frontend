/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import typeInfo from '../../../shared/utils/typeInfo';

// Components
import StatisticBlock from '../../../Reusable/Statistics/components/StatisticBlock';
import NFCard from '../../../shared/components/404/Card';

// Declaration
class Statistics extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Array).isRequired,
    parent: PropTypes.string.isRequired,
  };

  render() {
    const {
      instances,
      parent,
    } = this.props;

    return (
      <div className="justify-content-center w-100">
        <h4 className="text-center mt-2 rel">{typeInfo['political.Statistic'].name}</h4>
        <Row className="mx-auto">
          <div className="statistics-grid w-100 justify-content-center">
          {instances ? (instances.map(instance => (
            <div key={instance.id}>
              <StatisticBlock instance={instance} />
            </div>
          ))) : (
            <NFCard parent={parent} type="political.Statistic" light />
          )}
          </div>
        </Row>
      </div>
    );
  }
}

export default Statistics;
