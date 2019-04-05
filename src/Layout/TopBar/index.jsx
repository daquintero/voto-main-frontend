// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
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
import classNames from 'classnames';
import { withBreakpoints } from 'react-breakpoints';

// PropTypes
import breakpointsPropTypes from '../../shared/propTypes/breakpoints';

// Functions
import wrapper from '../../shared/utils/wrapper';

// Actions
import { finishedFirstVisit } from './redux/actions';

// Images
import logo from './favicon.ico';


class TopBar extends Component {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    visited: PropTypes.bool.isRequired,

    // Breakpoints
    ...breakpointsPropTypes,
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
      privacySeen, collapsed,
    } = this.state;

    // Props
    const {
      currentBreakpoint,
      breakpoints,
    } = this.props;

    const vertical = breakpoints[currentBreakpoint] === breakpoints.mobile;

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
            <NavbarBrand className="navbar__brand">
              <Link to="/" className="navbar__brand__inner">
                <img className="img-fluid pr-2" src={logo} alt="" />
                <h4>
                  #VotoInformado2019
                </h4>
              </Link>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-4"
            />
            <Collapse
              isOpen={!collapsed}
              navbar
              className="justify-content-end"
            >
              <Nav
                vertical={vertical}
                className="navbar__nav__wrapper bg-white justify-content-center"
              >
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                >
                  <div className={classNames('navbar__nav__item', { vertical })}>
                    <div className="navbar__nav__link" >
                      Manual
                    </div>
                  </div>
                </a>
                <Link to="/acerca">
                  <div className={classNames('navbar__nav__item', { vertical })}>
                    <div className="navbar__nav__link">
                      Nosotros
                    </div>
                  </div>
                </Link>
                <a
                  href="https://studio.votoinformado2019.com"
                >
                  <div className={classNames('navbar__nav__item end', { vertical })}>
                    <div className="navbar__nav__link">
                      <i className="fal fa-user-circle" />
                    </div>
                  </div>
                </a>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default wrapper({
  component: TopBar,
  wrappers: [
    withBreakpoints,
    connect(),
  ],
});
