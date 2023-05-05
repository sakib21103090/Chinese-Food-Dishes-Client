import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';


const Register = () => {
  const [error ,setError]=useState('');

    const {createUser}=useContext(AuthContext);
    const HandelRegister=event=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        console.log(name,photo,email,password)

        setError('')
        if (password.length <6){
          setError('please set password up to six character')
          return
      }

        createUser(email,password)
        .then(result => {
        
            const createdUser = result.user;
            console.log(createdUser);
          })
          .catch(error => {
            console.log(error);
            setError('wrong input please input valid data');
          });
    }
    return (
        <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center mt-4">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4 shadow Bcc">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Sign up
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={HandelRegister}>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control type="text" name='name' placeholder="Enter Name"  required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-center">photo url</Form.Label>
                          <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                        </Form.Group>
  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                        
                        </Form.Group>
                        <div className="d-grid">
                          <Button className='Bcn' type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{' '}
                          <Link to="/login" className="label-text-alt link link-hover  ml-1"> Login </Link>
                      
                        </p>
                        <p className='text-danger text-center	 border fw-bold mt-2'> <small>{error}</small></p>
                      </div>
                    </div>
                  </div>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Register;