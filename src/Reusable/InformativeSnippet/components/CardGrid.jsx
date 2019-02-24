import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import InformativeSnippetCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
class InformativeCardGrid extends PureComponent {
  static propTypes = PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired;

  render() {
    const { info } = this.props;
    return (
    // Controlled widths by the frontend design
      <Row noGutters>
        {info[0] && info.map(obj => (
          <Col
            xs={layoutMap[obj.size].xs.outer.wrapper}
            sm={layoutMap[obj.size].sm.outer.wrapper}
            md={layoutMap[obj.size].md.outer.wrapper}
            lg={layoutMap[obj.size].lg.outer.wrapper}
            xl={layoutMap[obj.size].xl.outer.wrapper}
            className="p-2"
            key={obj.id}
          >
            <InformativeSnippetCard objIn={obj} key={obj.id} />
          </Col>
          ))}
      </Row>
    );
  }
}

export default InformativeCardGrid;
