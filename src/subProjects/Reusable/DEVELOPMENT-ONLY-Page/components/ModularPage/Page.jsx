/* eslint-disable */
// Full CorruptionCase for the Corruption CorruptionCase Component
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

// Components
import Header from './Header';
import Gallery from './Gallery';
import Relationships from './Relationships';
import Description from '../../../../Assembly/DetailedPage/components/Individual/Description';
import RightSide from '../../../../Assembly/DetailedPage/components/Individual/RightSide';

class CorruptionCase extends PureComponent {
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
          <Col xs={12} md={6}>
            <Header />
          </Col>
          <Col xs={12} md={6}>
            <Gallery />
          </Col>
        </Row>
        <Row className="p-2">
          <Col xs={12} md={8} className="bg-white">
            <Description />
            <Relationships />
          </Col>
          <Col xs={12} md={4} className="p-2">
            <RightSide />
          </Col>
        </Row>
      </Container>
    );
  }
}

// TODO Refactor just to pass ACTION into props
export default CorruptionCase;
