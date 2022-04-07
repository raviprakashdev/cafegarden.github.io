import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, NavDropdown, Button, Nav } from 'react-bootstrap';

class Header extends React.Component {

    render() {

        return (
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" >Cafe Garden</Navbar.Brand>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="m-auto ml-4 ml-lg-0"
                            style={{ maxHeight: '100px', color: 'lightpink' }}
                            navbarScroll
                        >
                            <Link to="/">   <Nav.Link href="#action1"><h4 className="linnktext">Home</h4></Nav.Link> </Link>
                            {/*<Nav.Link href="#action2"><h4 className="linnktext">Menu</h4></Nav.Link>*/}

                            <Link to="/menu"> 
                             <NavDropdown title="Menu" id="basic-nav-dropdown"> Menu
                                <Link to="/coffee">  <NavDropdown.Item href="#Coffee.js">Coffee</NavDropdown.Item> </Link>
                                <Link to="/cakes">  <NavDropdown.Item href="#action/3.2">Cakes</NavDropdown.Item> </Link>
                                <Link to="/icecreams">  <NavDropdown.Item href="#action/3.3">Ice-Creams</NavDropdown.Item> </Link>

                            </NavDropdown>
                            </Link>
                            <Link to="/gallery">   <Nav.Link href="#action2"><h4 className="linnktext">Gallery</h4></Nav.Link> </Link>
                            <Link to="/blogs">   <Nav.Link href="#action3"><h4 className="linnktext">Blogs</h4></Nav.Link> </Link>
                            <Link to="/about">   <Nav.Link href="#action4"><h4 className="linnktext">About</h4></Nav.Link> </Link>
                            <Link to="/contact">   <Nav.Link href="#action5"><h4 className="linnktext">Book A Table</h4></Nav.Link> </Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        )
    }
}
export default Header;