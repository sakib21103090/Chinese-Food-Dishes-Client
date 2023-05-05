import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form, ListGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import PopUp from '../PopUp/PopUp';



const Login = () => {
  const [error ,setError]=useState('');
  const{SignIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();


  const from =location.state?.from?.pathname || '/';

  const HandelLogin=event=>{
    event.preventDefault();
    const form =event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    setError('')

    
    SignIn(email,password)
    .then(result => {
    
        const LoggedUser = result.user;
        console.log(LoggedUser);
        form.reset();
        navigate(from,{replace :true});
       
      })
      .catch(error => {
        console.log(error);
        setError('wrong input please input valid data');
        
      });
  
  }
    return (
        <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center ">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow Bcc">
                <Card.Body>
                  <div className="mb-3 mt-md-4 Text3">
                    <h2 className="fw-bold mb-2 text-uppercase text-center ">Login please</h2>
                    <div className="mb-3">
                      <Form onSubmit={HandelLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-dark" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button className='Bcn text-2' type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <Link to="/Register" className="label-text-alt link link-hover  ml-1"> Sign up </Link>
                        </p>
                      </div>
                      <p className='text-danger text-center	 border fw-bold mt-2'> <small>{error}</small></p>
                    </div>
                  </div>
                  <div>
                <PopUp></PopUp>
                 </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
        </Container>
      </div>
    );
};

export default Login;