// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Modal,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { finishedFirstVisit } from './redux/actions';

// Images
import logo from './favicon.ico';


class TopBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    visited: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      privacySeen: false,
    };
  }

  componentDidMount() {
    const { visited } = this.props;

    if (visited === false) {
      this.openFirstVisit();
    }
  }

  closePrivacy = () => {
    const { dispatch } = this.props;

    dispatch(finishedFirstVisit());
    this.setState(({
      privacySeen: false,
    }));
  };

  openFirstVisit = () => {
    this.setState(({
      privacySeen: true,
    }));
  };

  toggleNavbar = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    // State
    const {
      privacySeen,
    } = this.state;

    return (
      <>
        <Modal isOpen={privacySeen} className="p-4">
          <Row noGutters>
            <Col>
              Bienvenido a&nbsp;
              <span>#VotoInformado2019</span>.
              Si continúa navegando y utilizando este sitio web,
              acepta cumplir y estar sujeto a los&nbsp;
              <Link to="/legal" onClick={this.closePrivacy}>
                términos y condiciones
              </Link>&nbsp;
              de uso.
            </Col>
          </Row>
          <Row noGutters className="p-2 justify-content-center">
            <Button onClick={this.closePrivacy}>
              Acepto
            </Button>
          </Row>
        </Modal>
        <Navbar light expand="md" className="navbar p-0 shadow">
          <Container className="navbar__wrapper bg-white px-0">
            <NavbarBrand className="navbar__brand d-inline">
              <Link to="/">
                <h4 className="p-1 m-0">
                  <img className="img-fluid pr-2" src={logo} alt="" />#VotoInformado2019
                </h4>
              </Link>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-4"
            />
            <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-end">
              <div
                className="navbar__nav__wrapper bg-white justify-content-center"
              >
                <div className="navbar__nav__item">
                  <div className="navbar__nav__link" >
                    {/* TODO remove coloring */}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                    >
                      Manual
                    </a>
                  </div>
                </div>
                <div className="navbar__nav__item">
                  <Link className="navbar__nav__link" to="/acerca">
                    Nosotros
                  </Link>
                </div>
                <div className="navbar__nav__item end">
                  <a className="navbar__nav__link" href="https://studio.votoinformado2019.com">
                    <i className="fal fa-user-circle" />
                  </a>
                </div>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default connect()(TopBar);
