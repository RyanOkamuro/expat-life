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
                        <NavItem eventKey={3} componentClass={Link} href="/expat" to="/expat">
                            Expat Life
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/study-abroad" to="/study-abroad">
                            Study Abroad
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/traveling" to="/traveling">
                            Traveling
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavBar;