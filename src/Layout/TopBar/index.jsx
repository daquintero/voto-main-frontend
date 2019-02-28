// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Functions
// import imageUrl from '../../shared/utils/imageUrl';


class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onClick = () => {
    this.setState(prevState =>
      ({ test: !prevState.test }));
  };

  toggleNavbar = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  handleOnHover = (e) => {
    e.persist();
    const { id } = e.currentTarget.dataset;
    this.setState({ currentTab: id });
  };

  renderSubNav = () => {
    const { currentTab } = this.state;
    switch (currentTab) {
      case '1':
        return (
          <div className="navbar__subnav__wrapper one">
            <Container>
              <div className="navbar__subnav__head">
                <h3>News</h3>
              </div>
            </Container>
          </div>
        );
      case '2':
        return (
          <div className="navbar__subnav__wrapper two">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Corruption</h3>
              </div>
            </Container>
          </div>
        );
      case '3':
        return (
          <div className="navbar__subnav__wrapper three">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Candidates</h3>
              </div>
            </Container>
          </div>
        );
      default:
        return (
          <></>
        );
    }
  };

  render() {
    // State
    const {
      currentTab,
    } = this.state;

    return (
      <div>
        <Container fluid className="p-0">
          <Row noGutters className="justify-content-center">
            <Navbar light expand="md" className="border-0 navbar__wrapper">
              <NavbarBrand href="/" className="navbar__brand">
                <h3 className="m-0">#VotoInformado2019</h3>
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggleNavbar}
                className="mr-2"
              />
          <>
            <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-center test">
              <Row noGutters className="bg-white mt-2 mt-md-0 pb-3 pb-md-0">
                {/* <div className="navbar__search__wrapper mt-2 p-2 bg-white justify-content-center"> */}
                <Col md={4} lg={6} className="p-2 pt-sm-4 pt-md-2">
                  <form className="navbar__search__form m-0">
                    <Input
                      className="navbar__search__input"
                      type="text"
                      placeholder="Buscar"
                    />
                    <div className="navbar__search__icon">
                      <i className="fal fa-search" />
                    </div>
                  </form>
                </Col>
                {/* </div> */}
                {/* <div className="navbar__nav__wrapper p-2 mb-2 mb-md-0 bg-white justify-content-center"> */}
                <Col
                  xs={4}
                  md={2}
                  lg={2}
                  className={classNames(
'navbar__nav__item d-sm-flex d-md-block text-center px-3',
                    { active: currentTab === '1' },
)}
                  data-id="1"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">
                    <i className="fal fa-map d-md-none px-2" />
                    Mapa
                  </Link>
                </Col>
                <Col
                  xs={4}
                  md={3}
                  lg={2}
                  className={classNames(
'navbar__nav__item d-sm-flex d-md-block text-center px-3',
                    { active: currentTab === '2' },
)}
                  data-id="2"
                  onMouseEnter={this.handleOnHover}
                >
                  <div className="navbar__nav__link" >
                    {/* TODO remove coloring */}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                    >
                      <i className="fal fa-book d-md-none px-2" />
                        Manual
                    </a>
                  </div>
                </Col>
                <Col
                  xs={4}
                  md={3}
                  lg={2}
                  className={classNames(
'navbar__nav__item w-100 d-sm-flex d-md-block text-center px-3',
                    { active: currentTab === '3' },
)}
                  data-id="3"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">
                    <i className="fal fa-user d-md-none px-2" />
                    Nosotros
                  </Link>
                </Col>
              </Row>
              {/* </div> */}
            </Collapse>
          </>
            </Navbar>
          </Row>
          {/* TODO ADD THIS LATER SINCE NOT MANY PAGES SO FAR */}
          {/* {this.renderSubNav()} */}
        </Container>
      </div>
    );
  }
}

export default TopBar;
