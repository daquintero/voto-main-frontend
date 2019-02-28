// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import typeInfo from '../../../shared/utils/typeInfo';

// Components
import StatisticBlock from '../../../Reusable/Statistics/components/StatisticBlock';
// TODO import NFCard from '../../../shared/components/404/Card';

// Declaration
class Statistics extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Array).isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const {
      instances,
      type,
    } = this.props;

    return (
      <>
        <h4 className="text-center mt-2">{typeInfo[type].name.capitalize}</h4>
        <Row className="mx-auto">
          {instances ? (instances.map(instance => (
            <Col xs={6} className="p-2">
              <StatisticBlock instance={instance} />
            </Col>
          ))) : (
            null
          )}
        </Row>
      </>
    );
  }
}

export default Statistics;
