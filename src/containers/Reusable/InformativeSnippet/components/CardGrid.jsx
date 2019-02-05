import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import { CardGridDefaultPropTypes, CardGridPropTypes } from './InformativeSnippetPropTypes';

/* Imperative PureFunction Grid Approach  */
class InformativeCardGrid extends PureComponent {
  static propTypes = CardGridPropTypes;
  static defaultProps = CardGridDefaultPropTypes;
  render() {
    const { info } = this.props;
    return (
      <div>
        <Container className="p-0">
          <Row noGutters>
            <Col xs={12} md={6} xl={4}>
              <Card info={info[0]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InformativeCardGrid;
