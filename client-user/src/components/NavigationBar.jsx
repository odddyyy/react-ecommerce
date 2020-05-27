import React from 'react'

//bootstrap components
import { Navbar, Nav } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="main-navbar fixed-top">
        <Nav className="mr-auto">
            <Nav.Link className="navbar-text">Warunglocal.</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link><span className="links"><i class="fas fa-shopping-bag mr-2"></i>Shop</span></Nav.Link>
                <Nav.Link><span className="links"><i class="fas fa-shopping-cart mr-2"></i>Cart</span></Nav.Link>
                <Nav.Link><span className="links"><i class="fas fa-sign-in-alt mr-2"></i>Login</span></Nav.Link>
                <Nav.Link><span className="links"><i class="fas fa-sign-out-alt mr-2"></i>Logout</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
