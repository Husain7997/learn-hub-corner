import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Course from '../Courses/Courses';


const CoursesSection = () => {
    return (
        <Container >
            <Row className='mt-4'>
                <Col lg='4' className='mt-5'>
                    <ButtonGroup vertical>

                        <Link href="https://www.facebook.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaFacebook></FaFacebook> Facebook</Button></Link>
                        <Link href="https://www.youtube.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaYoutube /> Youtube</Button></Link>
                        <Link href="https://www.twitter.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaTwitter /> Twitter</Button></Link>
                        <Link href="https://www.instagram.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaInstagram /> Instagram</Button></Link>
                        <Link href="https://www.linkedin.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaLinkedin /> Linkedin</Button></Link>
                        <Link href="https://www.skype.com/"><Button variant="outline-primary" className='my-2' style={{ width: '300px' }}><FaSkype /> Skype</Button></Link>

                    </ButtonGroup>
                </Col>
                <Col>
                    <Courses></Courses>

                </Col>
            </Row>
        </Container >
    );
};

export default CoursesSection;