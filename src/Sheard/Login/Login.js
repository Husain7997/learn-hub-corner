import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { providerSignIn, logIn, providerFacebookSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const course = useLoaderData();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
    const [error, setError] = useState('');
    const [Accept, setAccept] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const hendleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    };

    const heandleFacebookRegitretion = () => {
        providerFacebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    };

    const hendleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message);
            });
        form.reset();
        setError('');
    }
    const hendleChacked = (event) => {
        setAccept(event.target.checked);
    }
    return (
        <div className='d-flex justify-content-center m-5'>
            <Form onSubmit={hendleSubmit} className='w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={hendleChacked} type="checkbox" label={<>Accepts <Link to='/terms'>Terms And Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!Accept}>
                    Login
                </Button> <br />
                <Button className='mt-3' onClick={hendleGoogleSignIn} variant="primary"><FaGoogle /> Login With Google</Button> <br />
                <Button className='mt-3' onClick={heandleFacebookRegitretion} variant="primary"><FaGoogle /> Login With Facebook</Button><br />
                <br />
                <h6>No Account Yet? <Link to='/register'>Register</Link></h6>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );

};

export default Login;