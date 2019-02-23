// Index container for the TopBar
import React, { Component } from 'react';
// Imported in order of usage in the reactstrap model
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Nav,
  Input,
  FormGroup,
  // TODO ADD THIS AFTER Fixing Dropdown
  // UncontrolledDropdown,
  // DropdownMenu,
  // DropdownToggle,
  // DropdownItem,
} from 'reactstrap';

// TODO Validate DOM Nesting with Uncontrolled Dropdown

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    // Binding function so no undefined exists upon inatilazaiton TODO improve binding toggleNavBar
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  onClick = () => {
    this.setState(prevState =>
      ({ test: !prevState.test }));
  };
  toggleNavbar() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          {/* Main Info and Functions for Dropdown NavBar */}
          <NavbarBrand href="/">
            <h1>VotoInformado</h1>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2"
          />
          {/* Dropdown Links - can be taken
          into new file later if it expands */}
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="navbar-nav-scroll justify-content-center p-1" navbar>
              {/* Search at the top, container needed for resizing */}
              <NavItem>
                <FormGroup className="p-2 m-0">
                  <Input
                    type="string"
                    name="text"
                    id="homeSearch"
                    placeholder="Investiga!"
                  />
                </FormGroup>
              </NavItem>
              {/* Home Page */}
              <NavItem>
                <NavLink href="/home">
                  <i className="fa fa-home p-2" />
                  Home
                </NavLink>
              </NavItem>
              {/* Mapa */}
              <NavItem>
                <NavLink href="/mapa" >
                  <i className="fa fa-map p-2" />
                  Mapa
                </NavLink>
              </NavItem>
              {/* TODO FIX LIST INSIDE LIST */}
              {/* Candidates Dropdown */}
              {/* <NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar> */}
              {/* <DropdownToggle nav caret> */}
              {/* <i className="fa fa-podium-star p-2" /> */}
              {/* Candidatos */}
              {/* </DropdownToggle> */}
              {/* <DropdownMenu right> */}
              {/* <DropdownItem> */}
              {/* <NavLink href="/descubre-candidatos" > */}
              {/* <i className="fa fa-eye p-2" /> */}
              {/* Descubre Candidatos */}
              {/* </NavLink> */}
              {/* </DropdownItem> */}
              {/* <DropdownItem> */}
              {/* <NavLink href="/compara-candidatos" > */}
              {/* <i className="fa fa-check-square p-2" /> */}
              {/* Compara Candidatos */}
              {/* </NavLink> */}
              {/* </DropdownItem> */}
              {/* </DropdownMenu> */}
              {/* </UncontrolledDropdown> */}
              {/* </NavItem> */}
              {/* About Us */}
              <NavItem>
                <NavLink href="/mapa" >
                  <i className="fa fa-info-circle p-2" />
                  Acerca de Voto Informado
                </NavLink>
              </NavItem>
              {/* Will add as I go building */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
