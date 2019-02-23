import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import OrganizationCard from './Card';
import { CardGridDefaultPropTypes, CardGridPropTypes } from './OrganizationPropTypes';
// Layout Map
import layoutMap from '../../../shared/utils/layoutMap';

/* Imperative PureFunction Grid Approach  */
class OrganizationCardGrid extends PureComponent {
  static propTypes = CardGridPropTypes;
  static defaultProps = CardGridDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (

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
            <OrganizationCard objIn={obj} key={obj.id} />
          </Col>
        ))}
      </Row>

    );
  }
}

export default OrganizationCardGrid;
