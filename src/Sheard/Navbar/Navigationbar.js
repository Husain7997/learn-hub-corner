import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.jpeg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleLogOut = () => {
        logOut()
            .than(() => { })
            .catch(() => { });
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='ms-0'>
            <Container>
                <div>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Learn Hub Corner
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link className="me-2" to='/'><Button variant="primary">Home</Button></Link></Nav.Link>
                        <Nav.Link> <Link className="me-2" to='/courses'><Button variant="primary">Courses</Button></Link></Nav.Link>
                        <Nav.Link> <Link className="me-2" to='/blog'><Button variant="primary">Blogs</Button></Link></Nav.Link>
                        <Nav.Link> <Link className="me-2" to='/mycourses'> <Button variant="primary">MyCourses</Button></Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="primary" className='ms-2'> Log Out</Button></>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="primary"> Login</Button></Link>
                                        <Link className='ms-2' to='/register'><Button variant="primary"> Register</Button></Link></>
                            }

                        </Nav.Link>
                        <Nav.Link title={user?.displayName} >
                            {user?.photoURL ?
                                <Image style={{ width: '30px' }} roundedCircle src={user.photoURL}></Image> : <FaUserAlt />}
                        </Nav.Link>
                        <button className='rounded' variant="primary" onClick={toggleTheme}>Toggle Theme</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;