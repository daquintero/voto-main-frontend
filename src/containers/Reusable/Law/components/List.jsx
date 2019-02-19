// Law List Group

// Libraries
import React, { PureComponent } from 'react';
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';

// Props
import { lawsListPropTypes } from './LawPropTypes';


class LawsList extends PureComponent {
  static propTypes = lawsListPropTypes;

  render() {
    const { laws } = this.props;
    return (
      <ListGroup className="p-2">
        { laws.map(law => (
          <ListGroupItem className="list-right" tag="a" href={law.source}>
            <Row noGutters>
              <Col xs={2}>
                <i className="fal fa-gavel" />
              </Col>
              <Col xs={2}>
                <h4 className="p-1">{law.code}</h4>
              </Col>
              <Col xs={8}>
                <p className=" small p-1">{law.briefDescription}</p>
              </Col>
            </Row>
          </ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

export default LawsList;
