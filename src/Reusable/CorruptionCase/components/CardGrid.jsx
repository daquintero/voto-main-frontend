// TODO DESTRUCTURE PROPS IN SM, MD, LG
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CorruptionCaseCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
class CorruptionCaseCardGrid extends PureComponent {
  static propTypes = PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired;

  render() {
    const { info } = this.props;
    return (
      <Row noGutters>
        {info[0] && info.map(instance => (
          <Col
            xs={layoutMap[instance.size].xs.outer.wrapper}
            sm={layoutMap[instance.size].sm.outer.wrapper}
            md={layoutMap[instance.size].md.outer.wrapper}
            lg={layoutMap[instance.size].lg.outer.wrapper}
            xl={layoutMap[instance.size].xl.outer.wrapper}
            className="p-2"
            key={instance.id}
          >
            <CorruptionCaseCard instance={instance} key={instance.id} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default CorruptionCaseCardGrid;
