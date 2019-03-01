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
      <>
        <h4 className="text-center mt-2 rel">{typeInfo['political.Statistic'].name}</h4>
        <Row className="mx-auto">
          {instances ? (instances.map(instance => (
            <Col xs={6} className="p-2">
              <StatisticBlock instance={instance} />
            </Col>
          ))) : (
            <NFCard parent={typeInfo[parent].singular} type="political.Statistic" />
          )}
        </Row>
      </>
    );
  }
}

export default Statistics;
