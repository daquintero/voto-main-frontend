// Full Page for the Corruption Page Component
import React, { PureComponent } from 'react';
import { Container, Row } from 'reactstrap';

// TODO Many things are incomplete
// Prop Types
import { PageProps } from '../CorruptionCasePropTypes';
// , DefaultPageProps
// Redux Actions
import {
  getBasicCorruptionCasePage,
} from '../../redux/actions';

// Components
import Header from './Header';
import Gallery from '../../../Images/components/VIGallery';
import Relationships from './Relationships';

class Page extends PureComponent {
  // TODO Move the proptypes accordingly
  static propTypes = PageProps;
  //  static defaultProps = DefaultPageProps; // TODO Define defaults
  componentDidMount() {
    this.props.dispatch(getBasicCorruptionCasePage(this.props.id));
  }
  render() {
    return (
      <Container>
        <Row>
          <Header />
          {/* TODO Finish Stats */}
          {/* <Statistics /> */}
          <Gallery />
          <Relationships />
        </Row>
      </Container>
    );
  }
}

export default Page;
