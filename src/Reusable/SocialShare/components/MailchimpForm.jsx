// Subscription Form
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

import { subscribed } from '../../../Assembly/Home/redux/actions';

// Declaration
class MailchimpForm extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    mailchimpSubscribed: PropTypes.number.isRequired,
    studioUsers: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(subscribed());
  }

  render() {
    const { mailchimpSubscribed, studioUsers } = this.props;
    return (
      <>
        <h4>¡Comprométete a un #VotoInformado2019!</h4>
        <Row noGutters>
          <Col xs={6} className="p-2 my-auto text-center notice small-enlarge">
            <h5 className="py-1 m-0 text-center">
              {mailchimpSubscribed || 0} &nbsp;<i className="fal px-2 fa-envelope send" />
            </h5>
            <h6 className="m-0">
              Noticiero
            </h6>
          </Col>
          <Col xs={6} className="p-2 my-auto text-center notice small-enlarge">
            <a href="https://studio.votoinformado2019.com">
              <h5 className="sl py-1 m-0 text-center sl">
                {studioUsers || 0} &nbsp; <i className="fal px-2 fa-user enlarge" />
              </h5>
              <h6 className="m-0">
               Investigadores VotoStudio
              </h6>
            </a>
          </Col>
        </Row>
        <Modal>
          asdfasd
        </Modal>
      </>

    );
  }
}

const mapStateToProps = (state) => {
  const { mailchimpSubscribed, studioUsers } = state.home.subscribed;
  return {
    mailchimpSubscribed,
    studioUsers,
  };
};

export default connect(mapStateToProps)(MailchimpForm);

// TODO erade
// <Row noGutters className="small-enlarge notice">
//   <Col xs={4} className="p-2 my-auto">
//     <div className="border-dark border sl p-2 minw] text-center">
//       {subscribedNumber}
//     </div>
//   </Col>
//   <Col xs={8} className="p-2 justify-content-center align-content-center">
//     <h6 className="m-0 lead justify-content-center">
//       Comprometidos a un &nbsp;
//       <span className="sl">#VotoInformado2019</span>
//     </h6>
//   </Col>
// </Row>
// <Modal>
// asdfasd
// </Modal>
