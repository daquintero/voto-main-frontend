/* eslint-disable */
// Full Page for the Corruption Page Component
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO THIS IS THE NO REDUX VERSION
// Prop Types
import { PageProps } from '../../../CorruptionCase/components/CorruptionCasePropTypes';
// TODO , DefaultPageProps

// Redux Actions
// import {
//   getBasicCorruptionCasePage,
// } from '../../../redux/actions';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Relationships from './Relationships';
import Statistics from './Statistics';
import MainFinancesNav from '../../../FinanceItem/components/MainFinancesNav';

class Page extends PureComponent {
  // TODO Move the proptypes accordingly
  static propTypes = PageProps;
  //  static defaultProps = DefaultPageProps; // TODO Define defaults
  // componentDidMount() {
  //   //   // TODO Connect to redux
  //   //   this.props.dispatch(getBasicCorruptionCasePage(this.props.id));
  //   // }
  render() {
    return (
      <Container>
        <Row className="p-2">
          <Col xs={12} md={6}>
            <Header />-
          </Col>
          <Col xs={12} md={6}>
            {/* Todo Give Data to Gallery */}
            <Gallery />
          </Col>
          <MainFinancesNav corruptionRelatedFunds={123123123.1} nonCorruptionRelatedFunds={1231232.2} />
          <Col xs={12} className="p-2">
            <h3 className="text-center">Estadística</h3>
            <Statistics />
          </Col>
          <Row>
            <Col xs={12}>
              <Relationships />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

// TODO Refactor just to pass ACTION into props
export default Page;
