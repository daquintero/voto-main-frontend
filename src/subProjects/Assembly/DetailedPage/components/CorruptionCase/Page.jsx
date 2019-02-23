// Full CorruptionCase for the Corruption CorruptionCase Component
// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Prop Types
import { PageProps } from './PagePropTypes';
// TODO , DefaultPageProps

// Redux Actions
import { getDetailedPage } from '../../redux/actions';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Relationships from './Relationships';
import RightSide from './RightSide';

class Page extends PureComponent {
  static propTypes = PageProps;
  //  static defaultProps = DefaultPageProps; // TODO Define defaults

  componentDidMount() {
    this.props.dispatch(getDetailedPage('political.corruptionCase', this.props.id));
  }

  render() {
    return (
      <Container>
        <Row className="p-2">
          <Col xs={12} md={8} className="bg-white">
            <Header />
            <Gallery />
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

export default connect(state => ({
  // Basic CorruptionCase information
  basic: state.openPage.basic,
}))(Page);
