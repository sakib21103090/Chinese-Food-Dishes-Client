import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const NavbarMain = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

  return (

            <div>
            <Navbar className='bg-success rounded mt-1 text-white  ' expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">  <h1 className='title-color'> Chinese-Food-Dishes</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
          </Nav>

            <Nav className="mx-auto gap-4">
              <Link  className="text-light fw-bold text-decoration-none normal-case text-xl"  to="/">Home</Link> 
              <Link  className="text-light fw-bold text-decoration-none normal-case text-xl"  to="/Blog">Blog</Link> 
             </Nav>
            <Nav className='gap-2'>
                                {
                                    user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                }
                                
                                {user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }

                            </Nav>

            </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>

  );
};

export default NavbarMain;