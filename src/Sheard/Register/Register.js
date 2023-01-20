import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Register = () => {
    const { providerSignIn, createUser, updateUserProfile, providerFacebookSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
    const [error, setError] = useState('');
    const [Accept, setAccept] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const heandleGooleRegitretion = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
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
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        handleUpdateUserProfile(name, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message));
        setError('');
        form.reset();
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const hendleChacked = (event) => {
        setAccept(event.target.checked);
    }

    return (
        <div className='d-flex justify-content-center m-5'>
            <Form onSubmit={hendleSubmit} className='w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={hendleChacked} type="checkbox" label={<>Accepts <Link to='/terms'>Terms And Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!Accept}>
                    Register
                </Button> <br />
                <Button className='mt-3' onClick={heandleGooleRegitretion} variant="primary"><FaGoogle /> Register With Google</Button> <br />
                <Button className='mt-3' onClick={heandleFacebookRegitretion} variant="primary"><FaGoogle /> Register With Facebook</Button><br />
                <br />
                <h6>Already have an Account <Link to='/login'>Login</Link></h6>
            </Form>
        </div>
    );
};
export default Register;