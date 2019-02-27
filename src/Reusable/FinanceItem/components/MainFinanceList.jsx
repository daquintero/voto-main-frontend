// Main Finance List displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { ListGroup, ListGroupItem, Col } from 'reactstrap';
import numeral from 'numeral';

// Props
import { mainFinanceListPropTypes } from './FinanceItemPropTypes';


class MainFinanceList extends PureComponent {
  static propTypes = mainFinanceListPropTypes;

  render() {
    const { corruptionRelatedFunds, nonCorruptionRelatedFunds } = this.props;
    return (
      <>
        {corruptionRelatedFunds || nonCorruptionRelatedFunds ? (
          <Col xs={12}>
            <ListGroup className="d-inline justify-content-center">
              <ListGroupItem className="list-up">
                <div>
                  <h4>{numeral(nonCorruptionRelatedFunds + corruptionRelatedFunds).format('$ 0,0.00')}</h4>
                </div>
                <div>
                  <h6>Total de Dinero Manejado</h6>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Col>
        ) : null }
      </>
    );
  }
}

export default MainFinanceList;
