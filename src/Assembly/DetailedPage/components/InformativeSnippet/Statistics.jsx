// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// Components
import StatisticBlock from '../../../../Reusable/Statistics/components/StatisticBlock';

// Declaration
class Statistics extends PureComponent {
  static propTypes = {
    statistics: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    const {
      statistics,
    } = this.props;

    return (
      <Row className="mx-auto">
        {statistics.map(statistic => (
          <Col md={6} className="p-2">
            <StatisticBlock statistic={statistic} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Statistics;
