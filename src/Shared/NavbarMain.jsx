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
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <h4 className="text-dark text-decoration-none normal-case text-xl">Chinese-Food-Dishes</h4>
                        <Nav className="mx-auto gap-4">
                            <Link  className="text-dark text-decoration-none normal-case text-xl"  to="/">Home</Link> 
                            <Link  className="text-dark text-decoration-none normal-case text-xl"  to="/Blog">Blog</Link> 
                            
                            
                            
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