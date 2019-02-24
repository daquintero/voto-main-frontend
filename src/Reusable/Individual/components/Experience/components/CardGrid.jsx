import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Card from './Card';

// Layout Map
import layoutMap from '../../../../../shared/utils/layoutMap';

/* Imperative PureFunction Grid Approach  */
class CardGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { instances } = this.props;
    return (

      <Row noGutters>
        {instances[0] && instances.map(instance => (
          <Col
            xs={layoutMap[instance.size].xs.outer.wrapper}
            sm={layoutMap[instance.size].sm.outer.wrapper}
            md={layoutMap[instance.size].md.outer.wrapper}
            lg={layoutMap[instance.size].lg.outer.wrapper}
            xl={layoutMap[instance.size].xl.outer.wrapper}
            className="p-2"
            key={instance.id}
          >
            <Card instance={instance} key={instance.id} />
          </Col>
        ))}
      </Row>

    );
  }
}

export default CardGrid;
