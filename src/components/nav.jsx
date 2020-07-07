import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";

class NavSections extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className='nav' fluid>
                    <Container>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <NavDropdown title="Dropdown" id="nav-dropdown">
                                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                                        <DropdownSubmenu href="#action/3.7" title="Text to show">
                                          <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
                                          <DropdownSubmenu href="#action/3.7" title="Text to show">
                                            <NavDropdown.Item href="#action/9.1">
                                              Sub 2
                                            </NavDropdown.Item>
                                          </DropdownSubmenu>
                                        </DropdownSubmenu>
                                      </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}

export default NavSections;