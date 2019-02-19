/* eslint-disable */
// Full Page for the Corruption Page Component
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO THIS IS THE NO REDUX VERSION
// Prop Types
import { PageProps } from '../PagePropTypes';
// TODO , DefaultPageProps

// Redux Actions
// import {
//   getDetailedCorruptionCasePage,
// } from '../../../redux/actions';

// TODO TEST DATA
import { lawsData } from '../SampleDataFullPage';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Relationships from './Relationships';
import Statistics from './Statistics';
import MainFinancesNav from '../../../FinanceItem/components/MainFinancesNav';
import LawList from '../../../Law/components/List';

class Page extends PureComponent {
  // TODO Move the proptypes accordingly
  static propTypes = PageProps;
  //  static defaultProps = DefaultPageProps; // TODO Define defaults
  // componentDidMount() {
  //   //   // TODO Connect to redux
  //   //   this.props.dispatch(getDetailedCorruptionCasePage(this.props.id));
  //   // }


  render() {
    return (
      <Container>
        <Row className="p-2">
          <Col xs={12} md={8} className="bg-white">
            <Header />
            <Gallery />
            <Description />
            {/* Todo Give Data to Gallery */}
            <Relationships />
          </Col>
          <Col xs={12} md={4} className="p-2">
            <h3 className="text-center mt-3">Fianzas</h3>
            <MainFinancesNav corruptionRelatedFunds={123123123.1} nonCorruptionRelatedFunds={1231232.2} />
            <h3 className="text-center mt-3">Estadística</h3>
            <Statistics />
            <h3 className="text-center mt-3"> Leyes Relacionadas </h3>
            <LawList laws={lawsData}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

// TODO Refactor just to pass ACTION into props
export default Page;
