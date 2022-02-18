import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-container p-2" >
                <Container>
                    <Navbar.Brand href="#home" className="justify-content-start">
                        <p className="navs-link">Plan Your Tour</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" ><p className="links-nav">Home</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about"><p className="links-nav">About</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><p className="links-nav">Services</p></Nav.Link>
                        {user?.email ?
                            <Nav className="">
                                <Nav.Link as={Link} to="/myBooking"><p className="links-nav">My Booking</p></Nav.Link>
                                <Nav.Link as={Link} to="/add"><p className="links-nav">Add a Service</p></Nav.Link>
                                <Nav.Link onClick={logOut} className="links-nav " >Logout</Nav.Link>

                            </Nav> :
                            <Nav.Link as={Link} to="/login"><p className="links-nav">Log in</p></Nav.Link>

                        }
                        <Navbar.Text>
                            <p className="links-nav">Signed in as: <a href="#login" variant="dark">{user?.displayName}</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;