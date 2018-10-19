import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

class CustomNavBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Ryan Okamuro</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/work-abroad" to="/work-abroad">
                            Work Abroad
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/study-abroad" to="/study-abroad">
                            Study Abroad
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/travel" to="/travel">
                            Travel
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavBar;