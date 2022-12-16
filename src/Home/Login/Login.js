
import React from 'react';
import google from '../../images/Google.jpg'
import loginImg from '../../images/login.jpg'
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { Card } from 'react-bootstrap';
const Login = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <Card className="form-container p-1" xs={1} md={3} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={loginImg} />
            <Card.Body>
                <Card.Title>
                    <h5 className='text-center text-decoration-none font-weight-bold mt-2 mb-2' style={{ color: '#680C42 ' }}>Login With Google</h5>
                </Card.Title>
                <Card.Text className=" d-flex align-items-center">
                    <img onClick={signInWithGoogle} src={google} alt="" className="w-25 p-2 m-auto" />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Login;
