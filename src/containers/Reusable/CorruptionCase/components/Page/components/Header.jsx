/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';
import { Row, Col, Card, Button, Modal } from 'reactstrap';
// Redux
// import { connect } from 'react-redux';

// Components
import MainFinanceList from '../../../../FinanceItem/components/MainFinanceList';

// Prop Types
import { headerPropTypes, headerDefaultProps } from './PagePropTypes';

class Header extends PureComponent {
  static propTypes = headerPropTypes;
  static defaultProps = headerDefaultProps;
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  toggleOpenModal= () => { // TODO REMOVE IF NOT NEEDED
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  };
  render() {
    const {
      basic
    } = this.props;
    return (
        <Row noGutters>
          <Col xs={12}>
          {/* Fill entire card container */}
            <Card className="page-header">
              <h2 className="p-2 text-center">{basic.title}</h2>
              <h5 className="p-3 text-muted">{basic.description}</h5>
              <Col xs={6} md={6}>
                <Button outline color="info" className="p-2 m-2 align-bottom" onClick={this.toggleOpenModal}>
                  Averigua Más
                </Button>
              </Col>
              <MainFinanceList
                nonCorruptionRelatedFunds={basic.nonCorruptionRelatedFunds}
                corruptionRelatedFunds={basic.corruptionRelatedFunds}/>
            </Card>
          {/* Long Description Modal */}
          <Modal
            isOpen={this.state.openModal}
            toggle={this.toggleOpenModal}
          >
            {basic.longDescription}
          </Modal>
          </Col>
        </Row>
    );
  }
}

export default Header;
// // TODO Reconnect to Redux
// export default connect(state => ({
//   // Basic Page information
//   title: state.openPage.basic.title,
//   description: state.openPage.basic.description,
//   longDescription: state.openPage.basic.longDescription,
// }))(Header);
