import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import IndividualCard from './Card';
import { CardGridDefaultPropTypes, CardGridPropTypes } from './IndividualPropTypes';
// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
class IndividualCardGrid extends PureComponent {
  static propTypes = CardGridPropTypes;
  static defaultProps = CardGridDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (
      <div>
        <Container className="p-0">
          <Row noGutters>

            {/* Controlled widths by the frontend design */}
            <Col xs={12} md={6} >
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
                    <IndividualCard objIn={obj} key={obj.id} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default IndividualCardGrid;
