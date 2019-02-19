// Statistics Block Grid

// Libraries
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Props
import { StatisticsProps } from './PagePropTypes';

// Components
import StatisticBlock from '../../../Statistics/components/StatisticBlock';

// Declaration
class Statistics extends PureComponent {
  static propTypes = StatisticsProps;

  render() {
    const { statistics } = this.props;
    return (
      <Row className="mx-auto">
        {statistics && statistics.map(statistic => (
          <Col md={6} className="p-2">
            <StatisticBlock statistic={statistic} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default connect(state => ({
  // Basic Page information
  statistics: state.openPage.statistics,
}))(Statistics);
