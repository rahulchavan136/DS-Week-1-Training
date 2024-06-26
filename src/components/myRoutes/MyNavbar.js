import React, { useState, useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';
import UserContext from '../../contextApi/UserContext';

const MyNavbar = () => {
    const { name } = useContext(UserContext); // Access 'name' from UserContext

    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => setExpanded(!expanded);
    const handleNavbarClose = () => setExpanded(false);

    return (
        <div>
            <Navbar expand="lg" expanded={expanded} bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">SCB React-Training</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" onClick={handleNavbarClose}>
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                            <NavDropdown title="Hooks" id="hooks-dropdown">
                                <NavDropdown.Item as={NavLink} to="reducers">useReducers Hook</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="refdemo">useRef Hook</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="scrolltopbottom">useRef Scrolling</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="usememo">useMemo Hook</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="customehook">Custom Hook</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="All Examples" id="examples-dropdown">
                                <NavDropdown.Item as={NavLink} to="/person">Person Info</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/userinfo">Form Handling</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/contextapi">Context API</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/home/blaster">Blaster nested routing</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/home/faster">Faster nested routing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/action/3.4">Others</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mini Projects" id="examples-dropdown">
                                <NavDropdown.Item as={NavLink} to="/todos">Todo List App</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="news">News APP</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/shopping">Shopping App</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link disabled>Welcome, {name}</Nav.Link>
                            <NavLink to="/" className="nav-link">
                                <PersonCircle size={24} />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavbar;
