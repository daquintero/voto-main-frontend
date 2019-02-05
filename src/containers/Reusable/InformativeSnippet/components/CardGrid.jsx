import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InformativeSnippetCard from './Card';
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

            {/* Controlled widths by the frontend design */}
            <Col xs={12} md={6} >
              <Row noGutters>
                {info.map(obj => (
                  <Col xs={6} className="p-2">
                    <InformativeSnippetCard objIn={obj} />
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

export default InformativeCardGrid;
